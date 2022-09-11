import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { getProducts, getCartByUserId, getOrderDetailsByOrderId, addToOrderDetails, createNewOrder, addToWishList } from '../DAL/api'
import ProductCard from './ProductCard'
import LoadingScreen from './LoadingScreen'
import BasketBallFooter from './Nav&Footer/BasketBallFooter'
import { getCookie } from '../common/cookie'






function Home() {
    const [productsArr, setProductsArr] = useState([])
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState([])
    const [created, setCreated] = useState()
    const [currentId, setCurrentId] = useState()


    useEffect(() => {
        async function getData() {
            setProductsArr(await getProducts())
            setLoading(false)
        }
        getData()
    }, [])
    useEffect(() => {
        async function getOrderData(id) {
            const orderData = await getCartByUserId(id)
            if (orderData[0]?.id) {
                setCurrentId(orderData[0].id)
            }

            if (orderData.length !== 0) {
                const cartData = await getOrderDetailsByOrderId(orderData[0].id)
                setCart(cartData)
                setCreated(false)
            } else {
                await createNewOrder(id)
                setCreated(true)
            }

        }

        if (getCookie('id') !== "") {
            getOrderData(getCookie('id'))

        }
    }, [created])
    async function addToCart(id, unit_price) {
        const currentItem = cart.find(item => item.item_id === id)
        if (currentItem !== undefined) {
            await addToOrderDetails(currentItem.order_id, currentItem.item_id, currentItem.quantity + 1, currentItem.unit_price)
            setCart(await getOrderDetailsByOrderId(currentId))
            return
        }
        await addToOrderDetails(currentId, id, 1, unit_price)
        setCart(await getOrderDetailsByOrderId(currentId))
    }
    async function addToWish(customer_id, item_id) {
        await addToWishList(customer_id, item_id)

    }

    const createPage = () => {
        return productsArr.map(product => <Col key={product.id}><ProductCard product={product} addFunc={addToCart} addToWish={addToWish}></ProductCard></Col>)

    }
    return (
        <div>

            <div className='main-div home-div'>
                {loading ? <LoadingScreen></LoadingScreen> :
                    <Container>
                        <Row>
                            {createPage()}

                        </Row>
                    </Container>

                }
            </div>
            <BasketBallFooter></BasketBallFooter>







        </div>
    )
}

export default Home
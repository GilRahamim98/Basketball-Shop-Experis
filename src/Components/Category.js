import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import LoadingScreen from './LoadingScreen'
import BasketBallFooter from './Nav&Footer/BasketBallFooter'
import { getProductsByCategory, getCartByUserId, getOrderDetailsByOrderId, addToOrderDetails } from '../DAL/api'
import { useParams } from 'react-router-dom'
import { getCookie } from '../common/cookie'



function Category() {
    const params = useParams()

    const [productsArr, setProductsArr] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentCategoryId, setCurrentCategoryId] = useState(params.id)
    const [cart, setCart] = useState([])

    useEffect(() => {
        function getId() {
            setCurrentCategoryId(params.id)

        }
        getId()
    }, [params])
    useEffect(() => {
        async function getData(categoryId) {
            setProductsArr(await getProductsByCategory(categoryId))
            setLoading(false)
        }
        getData(currentCategoryId)
    }, [currentCategoryId])
    useEffect(() => {
        async function getOrderData(id) {
            const orderData = await getCartByUserId(id)
            const cartData = await getOrderDetailsByOrderId(orderData[0].id)
            setCart(cartData)

        }
        if (getCookie('id') !== "") {
            getOrderData(getCookie('id'))
        }
    }, [])
    async function addToCart(id, unit_price) {
        const currentItem = cart.find(item => item.item_id === id)

        if (currentItem !== undefined) {
            await addToOrderDetails(currentItem.order_id, currentItem.item_id, currentItem.quantity + 1, currentItem.unit_price)
            return
        }
        await addToOrderDetails(cart[0].order_id, id, 1, unit_price)
    }

    const createPage = () => {
        return productsArr.map(product => <div key={product.id}><ProductCard product={product} addFunc={addToCart}></ProductCard></div>)
    }
    return (
        <div>
            <div className='main-div category-div'>
                {loading ? <LoadingScreen></LoadingScreen> : createPage()}
            </div>
            <BasketBallFooter></BasketBallFooter>





        </div>
    )
}

export default Category
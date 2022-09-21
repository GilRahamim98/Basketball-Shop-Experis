import React, { useEffect, useState, useContext } from 'react'
import ProductCard from './ProductCard'
import LoadingScreen from './LoadingScreen'
import BasketBallFooter from './Nav&Footer/BasketBallFooter'
import { getProductsByCategory, getCartByUserId, getOrderDetailsByOrderId, addToOrderDetails, addToWishList, getWishList, deleteFromWishList } from '../DAL/api'
import { useParams } from 'react-router-dom'
import { getCookie } from '../common/cookie'
import { UserWishList } from './Context/UserContext'




function Category() {
    const params = useParams()
    const [wishlist, setWishlist] = useState([])

    const [productsArr, setProductsArr] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentCategoryId, setCurrentCategoryId] = useState(params.id)
    const [cart, setCart] = useState([])

    useEffect(() => {
        async function getId() {
            setCurrentCategoryId(params.id)
            if (getCookie('id') !== "") {
                setWishlist(await getWishList(getCookie("id")))
            }

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
    async function addToWish(customer_id, item_id) {
        await addToWishList(customer_id, item_id)

    }
    async function deleteFromWish(customer_id, item_id) {
        await deleteFromWishList(customer_id, item_id)

    }


    const createPage = () => {
        return productsArr.map(product => <div key={product.id}><ProductCard product={product} addFunc={addToCart} addToWish={addToWish} deleteFromWish={deleteFromWish}></ProductCard></div>)
    }
    return (
        <UserWishList.Provider value={wishlist}>

            <div>
                <div className='main-div category-div'>
                    {loading ? <LoadingScreen></LoadingScreen> : createPage()}
                </div>
                <BasketBallFooter></BasketBallFooter>





            </div>
        </UserWishList.Provider>
    )
}

export default Category
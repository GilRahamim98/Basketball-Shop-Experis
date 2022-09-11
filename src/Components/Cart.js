import React, { useEffect, useState } from 'react'
import ProductInCartCard from './ProductInCartCard'
import BasketBallFooter from './Nav&Footer/BasketBallFooter'
import { getCartByUserId, getOrderDetailsByOrderId, createNewOrder, getCustomerStreet } from '../DAL/api.js'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import { deleteOrderDetails, buyCart } from '../DAL/api'
import { getCookie, setCookie } from '../common/cookie'
import { useNavigate } from 'react-router-dom'



function Cart() {
    const navigate = useNavigate()


    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(true)
    const [showEmpty, setShowEmpty] = useState(false);
    const [showBuy, setShowBuy] = useState(false);
    const [valueChanged, setValueChanged] = useState(false)
    const [street, setStreet] = useState({})

    const handleCloseEmpty = () => setShowEmpty(false);
    const handleShowEmpty = () => setShowEmpty(true);
    const handleCloseBuy = () => setShowBuy(false);
    const handleShowBuy = () => setShowBuy(true);

    useEffect(() => {
        if (getCookie('id') === "") {
            navigate("/")
            return
        }
        async function getOrderData(id) {
            const orderData = await getCartByUserId(id)
            const cartData = await getOrderDetailsByOrderId(orderData[0].id)
            setStreet(await getCustomerStreet(id))

            setCart(cartData)
            setLoading(false)


        }
        getOrderData(getCookie('id'))
    }, [])
    useEffect(() => {
        async function getOrderData(id) {
            const orderData = await getCartByUserId(id)

            if (orderData.length !== 0) {
                const cartData = await getOrderDetailsByOrderId(orderData[0].id)
                setCart(cartData)
            } else {
                await createNewOrder(id)
            }

            setLoading(false)
        }
        getOrderData(getCookie('id'))

    }, [valueChanged])


    async function deleteFromCart(itemId) {
        const itemToDelete = cart.find(item => item.item_id === itemId)
        const indexOfDeletedItem = cart.indexOf(itemToDelete)
        cart.splice(indexOfDeletedItem, 1)
        await deleteOrderDetails(itemToDelete.order_id, itemToDelete.item_id)

        setCart([...cart])
    }

    function deleteAllCart() {
        cart.forEach(async (cartItem) =>
            await deleteOrderDetails(cartItem.order_id, cartItem.item_id))
        cart.splice(0, cart.length)
        setCart([...cart])
    }
    function totalPriceValue() {
        let totalPrice = 0
        for (const item of cart) {
            totalPrice += item.quantity * item.unit_price
        }
        return totalPrice
    }
    function createCardItem(item) {
        return <ProductInCartCard orderItem={item} key={item.item_id} deleteItem={deleteFromCart} valueChanged={valueChanged} setValueChanged={setValueChanged}></ProductInCartCard>
    }
    function totalItems() {
        let totalItems = 0
        for (const item of cart) {
            totalItems += item.quantity
        }
        return totalItems
    }


    return (
        <div>
            {cart.length > 0 ?
                <div className='main-div'>
                    <button className='btn btn-danger btn-lg' onClick={handleShowEmpty}>🗑</button>
                    <Modal show={showEmpty} onHide={handleCloseEmpty}>
                        <Modal.Header closeButton>
                            <Modal.Title>Empty Cart?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to empty the cart?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseEmpty}>
                                Nope
                            </Button>
                            <Button variant="danger" onClick={() => { handleCloseEmpty(); deleteAllCart() }}>
                                Yes,Empty
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {cart.map(item => createCardItem(item))}
                    <h1>Total Price: {totalPriceValue()}$ </h1>

                    <button className='flickingBtn' onClick={handleShowBuy}>Buy now!</button>
                    <Modal show={showBuy} onHide={handleCloseBuy}>
                        <Modal.Header closeButton>
                            <Modal.Title>Buy Cart?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><h1>Total Price: {totalPriceValue()}$</h1></Modal.Body>
                        <Modal.Body><h1>Total Items: {totalItems()}</h1></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseBuy}>
                                Continue Shopping
                            </Button>
                            <Button variant="success" onClick={() => { handleCloseBuy(); buyCart(cart[0].order_id, `${street.city},${street.street}`); navigate("/") }}>
                                Yes!
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div> :
                <div className='main-div'>
                    <h1>There are currently no items in your cart.</h1>
                    <Link className="btn btn-outline-dark btn-lg" to="/">Continue Shopping</Link>
                </div>

            }
            <BasketBallFooter></BasketBallFooter >

        </div >
    )
}

export default Cart
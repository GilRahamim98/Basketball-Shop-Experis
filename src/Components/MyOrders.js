import React, { useEffect, useState } from 'react'
import { getCookie } from '../common/cookie'
import { getOrdersByCustomerId } from '../DAL/api'
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom'
import BasketBallFooter from './Nav&Footer/BasketBallFooter';


function MyOrders() {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        if (getCookie("id") === "") {
            navigate("/")
            return

        }
        async function getOrders(id) {
            const orders = await getOrdersByCustomerId(id)
            setOrders(orders)

        }
        getOrders(getCookie("id"))
    }, [])
    const createTHead = () => {
        return Object.keys(orders[0]).map(key => <th key={key}>{key.includes("_") ? key.replace("_", " ").toUpperCase() : key.toUpperCase()}</th>)
    }
    const createTBody = () => {
        let orderCounter = 1
        return orders.map(order => <tr key={order.id}><td>{orderCounter++}</td><td>{new Date(order.order_date).toISOString().substring(0, 10)}</td><td>{order.shipped_date === null ? "The order has not yet been sent" : new Date(order.shipped_date).toISOString().substring(0, 10)}</td><td>{order.ship_address}</td><td>
            <Link className="btn btn-outline-warning" to={`/MyProfile/orders/${order.id}`}>See order details</Link></td></tr>)
    }
    return (
        <>
            <div className='main-div' style={{
                width: "50%", margin: "5% 20%"
            }}>
                {orders.length > 0 ?
                    <div>
                        <Link className="btn btn-outline-dark btn-lg" to="/myProfile">Go To Profile</Link>
                        <Table striped="columns">
                            <thead>
                                <tr>
                                    {createTHead()}
                                    <th>SEE ORDER</th>
                                </tr>
                            </thead>
                            <tbody>
                                {createTBody()}

                            </tbody>
                        </Table></div> : <div className='main-div'>
                        <h1>There are currently no orders.</h1>
                        <Link className="btn btn-outline-dark btn-lg" to="/">Continue Shopping</Link>
                    </div>}



            </div>
            <BasketBallFooter></BasketBallFooter>
        </>

    )
}

export default MyOrders
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getOrderDetailsByOrderId, getProductById } from '../DAL/api'
import ProductInOrderList from './ProductInOrderList.js'
import { Button } from 'react-bootstrap';
import { getCookie } from '../common/cookie'


function Order() {
    const navigate = useNavigate()
    const [orderDetail, setOrderDetails] = useState([])
    const [proudcts, setProducts] = useState([])

    const params = useParams()
    useEffect(() => {
        if (getCookie("id") === "") {
            navigate("/")
            return

        }
        async function getData(id) {
            const currentOrder = await getOrderDetailsByOrderId(id)
            setOrderDetails(currentOrder)


        }

        getData(params.id)
    }, [])



    return (
        <div className='main-div'>
            <Link className='btn btn-outline-dark' to="/MyProfile/Orders">Go Back To All Orders</Link>
            {orderDetail.length > 0 ? orderDetail.map(orderDetail => <ProductInOrderList key={orderDetail.item_id} orderItem={orderDetail}></ProductInOrderList>) : ""}

        </div>
    )
}

export default Order
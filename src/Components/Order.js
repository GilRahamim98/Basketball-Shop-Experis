import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOrderDetailsByOrderId, getProductById } from '../DAL/api'
import ProductInOrderList from './ProductInOrderList.js'
import { getCookie } from '../common/cookie'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



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
        <div className='orders_items_list'>

            <Container>
                <Row>
                    {orderDetail.length > 0 ? orderDetail.map(orderDetail => <Col key={orderDetail.item_id}><ProductInOrderList orderItem={orderDetail}></ProductInOrderList></Col>) : null}

                </Row>
            </Container>

        </div>
    )
}

export default Order
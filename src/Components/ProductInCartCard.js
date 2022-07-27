import React, { useEffect, useState } from 'react'
import { getOrderDetailsByOrderId, getProductFirstImageById, getProductById } from '../DAL/api'

function ProductInCartCard(props) {
    const [orderDetails, setOrderDetails] = useState([])
    const [productsImage, setProductsImage] = useState([])
    const [productsArr, setProductsArr] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getCart(id) {
            setOrderDetails(await getOrderDetailsByOrderId(id))

        }
        getCart(props.orderId)
    }, [])

    useEffect(() => {
        function getImages() {
            orderDetails.forEach(async (orderDetail) => {
                let newImage = await getProductFirstImageById(orderDetail.productId)
                setProductsImage(prev => [...prev, newImage])

            })
        }
        function getProducts() {
            orderDetails.forEach(async (orderDetail) => {
                let newProduct = await getProductById(orderDetail.productId)
                setProductsArr(prev => [...prev, ...newProduct])
                setLoading(false)

            })
        }
        getImages()
        getProducts()

    }, [orderDetails])

    const getTheCurrentImageSrc = (id) => {
        return productsImage.filter(productImage => productImage.productId === id)[0].src

    }
    const getTheCurrentProductDetails = (id) => {
        return productsArr.filter(product => product.id === id)[0]

    }

    const createCards = () => {
        return orderDetails.map(orderDetail =>
            <div key={`${orderDetail.orderId},${orderDetail.productId}`} className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={getTheCurrentImageSrc(orderDetail.productId)} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{getTheCurrentProductDetails(orderDetail.productId).name}</h5>
                            <p>Quantity:</p>
                            <button className='btn btn-danger btn-sm' style={{ width: "1.5rem", borderRadius: "5px", marginRight: "1%" }} >-</button>
                            <input type="number" defaultValue={orderDetail.quantity || ''} style={{ width: "1.5rem", borderRadius: "10px" }}></input>
                            <button className='btn btn-danger btn-sm' style={{ width: "1.5rem", borderRadius: "5px", marginLeft: "1%" }}>+</button>
                            <h5 className="card-title">Total price:{getTheCurrentProductDetails(orderDetail.productId).unitPrice * orderDetail.quantity}$</h5>


                        </div>
                        <button className='btn btn-danger'>🗑</button>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='main-div'>

            {loading ? "" : <button className='btn btn-danger btn-lg'>🗑</button>}
            {loading ? "" : createCards()}
        </div>
    )
}

export default ProductInCartCard
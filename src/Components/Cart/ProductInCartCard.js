import React, { useEffect, useState } from 'react'
import { getOrderDetailsByOrderId, getProductFirstImageById, getProductById, changeOrderDetails, deleteOrderDetails } from '../../DAL/api'

function ProductInCartCard(props) {


    const [productImage, setProductImage] = useState([])
    const [product, setProduct] = useState({})

    const [loading, setLoading] = useState(true)
    const [currentOrderDetails, setCurrentOrderDetails] = useState(props.orderItem)


    useEffect(() => {
        // async function getImages() {
        //     setProductImage(await getProductById(props.orderItem.item_id))
        // }

        async function getProducts() {
            const item = await getProductById(props.orderItem.item_id)
            setProduct(item)
            setProductImage(item.images[0])
            setLoading(false)

        }
        // getImages()
        getProducts()

    }, [])

    async function decrease() {
        props.setValueChanged(!props.valueChanged)

        if (currentOrderDetails.quantity === 1) {
            props.deleteItem(product.id)
            await deleteOrderDetails(currentOrderDetails.order_id, currentOrderDetails.item_id)
            return
        }
        setCurrentOrderDetails({ ...currentOrderDetails, quantity: currentOrderDetails.quantity - 1 })
        await changeOrderDetails(currentOrderDetails.order_id, currentOrderDetails.item_id, currentOrderDetails.quantity - 1)
    }
    async function increase() {
        props.setValueChanged(!props.valueChanged)

        setCurrentOrderDetails({ ...currentOrderDetails, quantity: currentOrderDetails.quantity + 1 })
        await changeOrderDetails(currentOrderDetails.order_id, currentOrderDetails.item_id, currentOrderDetails.quantity + 1)

    }

    const createCards = () => {
        return (
            <div key={`${product.id}`} className="card mb-3" style={{ maxWidth: "90%", marginLeft: "15%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={productImage.image_src} className="img-fluid rounded-start" alt={product.item_name} style={{ maxWidth: "60%" }}></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.item_name}</h5>
                            <p>Quantity:</p>
                            <button className='btn btn-danger btn-sm' style={{ width: "1.5rem", borderRadius: "5px", marginRight: "1%" }} onClick={() => decrease()} >-</button>
                            <input type="number" value={currentOrderDetails.quantity || ''} style={{ width: "1.5rem", borderRadius: "10px" }} onChange={(e) => console.log(e.target.value)}></input>
                            <button className='btn btn-danger btn-sm' style={{ width: "1.5rem", borderRadius: "5px", marginLeft: "1%" }} onClick={() => increase()}>+</button>
                            <h5 className="card-title">Total price:{product.unit_price * currentOrderDetails.quantity}$</h5>


                        </div>
                        <button className='btn btn-danger' onClick={() => props.deleteItem(product.id)}>🗑</button>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {
                loading ? <h1>Hey</h1> : createCards()
            }

        </div>





    )
}

export default ProductInCartCard
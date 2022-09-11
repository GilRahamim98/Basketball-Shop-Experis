import React, { useEffect, useState } from 'react'
import { getCookie } from '../common/cookie'
import { getProductFirstImageById, getProductById, deleteFromWishList } from '../DAL/api'

function ProductCardWishlist(props) {


    const [productImage, setProductImage] = useState([])
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function getImages() {
            setProductImage(await getProductFirstImageById(props.item.item_id))
        }
        async function getProducts() {
            setProduct(await getProductById(props.item.item_id))
            setLoading(false)

        }
        getImages()
        getProducts()

    }, [])


    const createCards = () => {
        return (
            <div key={`${product.id}`} className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={productImage.image_src} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{product.item_name}</h4>


                        </div>
                        <button className='btn btn-danger' style={{ marginLeft: "1rem" }} onClick={() => props.deleteFromWishArr(product.id)} >Remove from wishlist</button>

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

export default ProductCardWishlist
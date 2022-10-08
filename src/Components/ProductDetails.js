import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import './ProductDetails.css'
import { getCookie } from '../common/cookie'
import LoadingScreen from './LoadingScreen'
import { useParams } from 'react-router-dom'
import BasketBallFooter from './Nav&Footer/BasketBallFooter'
import { addToOrderDetails, getCartByUserId, getOrderDetailsByOrderId, getProductById, getProductImagesById, addToWishList, getWishList, deleteFromWishList } from '../DAL/api'


function ProductDetails() {
    const params = useParams()
    const [currentProduct, setCurrentProduct] = useState({})
    const [imagesArr, setImagesArr] = useState([])
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [inWish, setInWish] = useState(false)


    const [currentId, setCurrentId] = useState()
    const [loading, setLoading] = useState(true)
    let [numOfItems, setNumOfItems] = useState(1)
    useEffect(() => {
        async function getOrderData(id) {
            const orderData = await getCartByUserId(id)
            setCurrentId(orderData[0].id)
            const cartData = await getOrderDetailsByOrderId(orderData[0].id)
            setCart(cartData)

        }
        async function getCurrentProduct(id) {
            const currentItem = await getProductById(id)
            setCurrentProduct(currentItem)
            setImagesArr(currentItem.images)
            if (getCookie('id') !== "") {
                setWishlist(await getWishList(getCookie("id")))
            }
            setLoading(false)

        }
        getCurrentProduct(params.id)
        if (getCookie('id') !== "") {
            getOrderData(getCookie('id'))
        }
    }, [])
    useEffect(() => {
        isInWishList()

    }, [wishlist])
    const isInWishList = () => {
        const current = wishlist.find(product => product.item_id === currentProduct.id)
        setInWish(current ? true : false)

    }


    const setImages = () => {
        return imagesArr.map(image =>
            <Carousel.Item key={image.id}>
                <img
                    className="d-block w-100"
                    src={image.image_src}
                    alt={currentProduct.item_name}
                />

            </Carousel.Item>

        )

    }
    async function addToCart() {
        if (getCookie('id') !== "") {
            const currentItem = cart.find(item => item.item_id === currentProduct.id)

            if (currentItem !== undefined) {
                await addToOrderDetails(currentItem.order_id, currentProduct.id, currentItem.quantity + numOfItems, currentItem.unit_price)
                return
            }
            await addToOrderDetails(currentId, currentProduct.id, numOfItems, currentProduct.unit_price)

        } else {
            alert("You need to login or register first!")

        }
    }
    const addToWish = async (e) => {

        setInWish(!inWish)

        if (getCookie('id') !== "") {
            await addToWishList(getCookie('id'), currentProduct.id)
        } else {
            alert("You need to login or register first!")
        }

    }
    async function decrease() {
        if (numOfItems === 1) {

        } else {
            setNumOfItems(--numOfItems)
        }


    }
    async function increase() {
        if (numOfItems === currentProduct.units_in_stock) {

        } else {
            setNumOfItems(++numOfItems)
        }

    }

    async function deleteFromWish(e) {

        setInWish(!inWish)
        await deleteFromWishList(getCookie('id'), currentProduct.id)

    }
    const setCurrentProductData = () => {

        return <div className="card-body">
            <h1 className="card-title">{currentProduct.item_name}</h1>
            <h5 className="card-text">{currentProduct.description}</h5>
            <h3 className="card-text">{currentProduct.unit_price}$</h3>
            {getCookie("id") !== "" ?
                currentProduct.units_in_stock !== 0 ?
                    <div>

                        <div>
                            <p>Quantity:</p>
                            <button className='btn btn-danger btn-sm' style={{ width: "1.5rem", borderRadius: "5px", marginRight: "1%" }} onClick={() => decrease()} >-</button>
                            <input type="number" min={1} max={currentProduct.units_in_stock} value={numOfItems} style={{ width: "1.5rem", borderRadius: "10px" }} onChange={(e) => e.target.value === "" || e.target.value < 1 || e.target.value > currentProduct.units_in_stock ? setNumOfItems(1) : setNumOfItems(e.target.value)}></input>
                            <button className='btn btn-danger btn-sm' style={{ width: "1.5rem", borderRadius: "5px", marginLeft: "1%" }} onClick={() => increase()}>+</button>
                        </div>
                        <div >
                            {inWish ? <button type="button" className="btn btn-danger btn-lg wishlist" onClick={() => deleteFromWish()}>Remove From Wishlist ❤</button> : <button type="button" className="btn btn-outline-danger btn-lg wishlist" onClick={() => addToWish()}>Add To Wishlist ❤</button>}

                            <button type="button" className="btn btn-outline-warning btn-lg" onClick={() => addToCart()}>Add to cart 🛒</button>

                        </div>
                    </div> :
                    <>
                        <button type="button" className="btn btn-outline-danger btn-lg wishlist" onClick={() => addToWish()}>Add to wishlist ❤</button>

                        <h2>Product currently out of stock!</h2>

                    </> :
                currentProduct.units_in_stock !== 0 ?
                    <div>

                        <div >
                            <button type="button" className="btn btn-outline-danger btn-lg wishlist" onClick={() => addToWish()}>Add to wishlist ❤</button>

                            <button type="button" className="btn btn-outline-warning btn-lg" onClick={() => addToCart()}>Add to cart 🛒</button>

                        </div>
                    </div> :
                    <>
                        <button type="button" className="btn btn-outline-danger btn-lg wishlist" onClick={() => addToWish()}>Add to wishlist ❤</button>

                        <h2>Product currently out of stock!</h2>

                    </>

            }



        </div>
    }
    return (
        <div>

            <div className="item">
                <div className="row g-5">
                    <div className="col-md-3">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <Carousel variant="dark">
                                {loading ? "" : setImages()}

                            </Carousel>

                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            {loading ? <LoadingScreen></LoadingScreen> : setCurrentProductData()}

                        </div>
                    </div>
                </div>
            </div>
            <BasketBallFooter></BasketBallFooter>


        </div >
    )
}

export default ProductDetails
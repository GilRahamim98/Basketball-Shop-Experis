import React, { useEffect, useState } from 'react'
import { Navbar, Carousel, Card, Button, Container, Nav, Form, FormControl } from 'react-bootstrap'
import BasketNavBar from './BasketNavBar'
import './ProductDetails.css'
import { getProductById, getProductImgesById } from '../DAL/api'
import LoadingScreen from './LoadingScreen'

function ProductDetails(props) {
    const [currentProduct, setCurrentProduct] = useState({})
    const [imagesArr, setImagesArr] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function getCurrentProduct(id) {
            setCurrentProduct(await getProductById(id))
            setImagesArr(await getProductImgesById(id))
            setLoading(false)

        }
        getCurrentProduct(props.id)

    }, [])


    const setImages = () => {
        return imagesArr.map(image =>
            <Carousel.Item key={image.imageId}>
                <img
                    className="d-block w-100"
                    src={image.src}
                    alt={currentProduct[0].name}
                />

            </Carousel.Item>

        )

    }
    const setCurrentProductData = () => {

        return <div className="card-body">
            <h1 className="card-title">{currentProduct[0].name}</h1>
            <h5 className="card-text">{currentProduct[0].description}</h5>
            <h3 className="card-text">{currentProduct[0].unitPrice}$</h3>
            <div >
                <button type="button" className="btn btn-outline-danger btn-lg wishlist">Add to wishlist ❤</button>

                <button type="button" className="btn btn-outline-warning btn-lg">Add to cart 🛒</button>

            </div>


        </div>
    }
    return (
        <div>



            <BasketNavBar></BasketNavBar>


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
                                {loading ? <LoadingScreen></LoadingScreen> : setImages()}

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


        </div >
    )
}

export default ProductDetails
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import { getProductById, getProductImgesById } from '../DAL/api'
import LoadingScreen from './LoadingScreen'



function ProductCard(props) {
    const [currentProduct, setCurrentProduct] = useState({})
    const [imagesArr, setImagesArr] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getData(id) {
            setCurrentProduct(await getProductById(id))
            setImagesArr(await getProductImgesById(id))
            setLoading(false)
        }
        getData(props.id)
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
    const setCardData = () => {
        return <Card.Body>
            <Card.Title>{currentProduct[0].name}</Card.Title>
            <Card.Text>
                {currentProduct[0].description}
            </Card.Text>
            <Card.Text>
                {currentProduct[0].unitPrice}$
            </Card.Text>
            <Button variant="primary">Go To Product</Button>
        </Card.Body>
    }

    return (
        <div>
            <Card className='product-card-div'>
                <Carousel variant="dark">
                    {loading ? "" : setImages()}
                </Carousel>
                {loading ? "" : setCardData()}

            </Card>

        </div>
    )
}

export default ProductCard
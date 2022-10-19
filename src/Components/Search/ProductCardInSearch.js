import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { getProductImagesById } from '../../DAL/api'

function ProductCardInSearch(props) {
    const [imagesArr, setImagesArr] = useState([])

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function getData() {
            setImagesArr(props.product.images)
            setLoading(false)
        }
        getData()
    }, [])

    const setImages = () => {
        return imagesArr.map(image =>
            <Carousel.Item key={image.id}>
                <img
                    className="d-block w-100"
                    src={image.image_src}
                    alt={props.product.name}
                />
            </Carousel.Item>
        )
    }



    const setCardData = () => {
        return <Card.Body >
            <Card.Title>{props.product.item_name}</Card.Title>
            <Card.Text>
                {props.product.unit_price}$
            </Card.Text>
            <Link className="btn btn-warning" to={`/Products/${props.product.id}`} state={{ product: props.product }}>Go To Product</Link>{" "}

            {
                props.product.units_in_stock !== 0 ? "" :
                    <Card.Footer className="text-muted">Product currently out of stock!</Card.Footer>
            }

        </Card.Body>
    }

    return (

        <Card className='product-card-div' style={{ border: "none" }}>
            <Carousel variant="dark">
                {loading ? "" : setImages()}
            </Carousel>
            {loading ? "" : setCardData()}

        </Card>

    )
}

export default ProductCardInSearch
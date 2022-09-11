import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { getCookie } from '../common/cookie'
import { getProductImagesById } from '../DAL/api'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';





function ProductCard(props) {
    const [imagesArr, setImagesArr] = useState([])

    const [loading, setLoading] = useState(true)



    useEffect(() => {
        async function getData(id) {
            setImagesArr(await getProductImagesById(id))
            setLoading(false)
        }
        getData(props.product.id)
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
    const cartIconClick = () => {
        if (getCookie('id')) {
            props.addFunc(props.product.id, props.product.unit_price)
        } else {
            alert("you need to login or register first!")
        }

    }
    const addToWishList = () => {
        if (getCookie('id')) {
            props.addToWish(getCookie('id'), props.product.id)
        } else {
            alert("you need to login or register first!")
        }

    }
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                {props.product.item_name} Added To Cart!
            </Popover.Body>
        </Popover>
    );

    const setCardData = () => {
        return <Card.Body >
            <Card.Title>{props.product.item_name}</Card.Title>
            <Card.Text>
                {props.product.unit_price}$
            </Card.Text>
            <Link className="btn btn-warning" to={`/Products/${props.product.id}`}>Go To Product</Link>{" "}
            <Button variant="outline-danger" onClick={() => addToWishList()}>❤</Button>{" "}
            {getCookie("id") !== "" ?

                props.product.units_in_stock !== 0 ?
                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={popover}>
                        <Button variant="outline-warning" onClick={() => cartIconClick()}>🛒</Button>
                    </OverlayTrigger>
                    :
                    <Card.Footer className="text-muted">Product currently out of stock!</Card.Footer>

                :
                props.product.units_in_stock !== 0 ?
                    <Button variant="outline-warning" onClick={() => cartIconClick()}>🛒</Button>

                    :
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

export default ProductCard
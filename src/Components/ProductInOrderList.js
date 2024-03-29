import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { getProductFirstImageById, getProductById, changeOrderDetails, deleteOrderDetails } from '../DAL/api'
import Placeholder from 'react-bootstrap/Placeholder';



function ProductInOrderList(props) {

    const [productImage, setProductImage] = useState({})
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {


        async function getProducts(id) {
            const item = await getProductById(id)
            setProduct(item)
            setProductImage(item.images[0])

            setLoading(false)

        }
        getProducts(props.orderItem.item_id)


    })
    return (
        <>{loading ? <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
        </Card> :

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={productImage.image_src} />
                <Card.Body>
                    <Card.Title>{product.item_name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Quantity:{props.orderItem.quantity}</ListGroup.Item>
                    <ListGroup.Item>Total Price: {props.orderItem.quantity * props.orderItem.unit_price}$</ListGroup.Item>

                </ListGroup>

            </Card>

        } </>

    )
}

export default ProductInOrderList
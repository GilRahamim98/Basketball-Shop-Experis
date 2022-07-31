import React, { useEffect, useState } from 'react'
import BasketNavBar from './BasketNavBar'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import { getProducts } from '../DAL/api'
import ProductCard from './ProductCard'
import LoadingScreen from './LoadingScreen'
import BasketBallFooter from './BasketBallFooter'




function Home() {
    const [productsArr, setProductsArr] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            setProductsArr(await getProducts())
            setLoading(false)
        }
        getData()
    }, [])
    const createPage = () => {
        return productsArr.map(product => <ProductCard key={product.id} id={product.id}></ProductCard>)

    }
    return (
        <div>
            <div className='main-div home-div'>
                {loading ? <LoadingScreen></LoadingScreen> : createPage()}
            </div>
            <BasketBallFooter></BasketBallFooter>





        </div>
    )
}

export default Home
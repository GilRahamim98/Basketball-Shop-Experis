import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getItemsBySearch } from '../../DAL/api'
import BasketBallFooter from '../Nav&Footer/BasketBallFooter'
import ProductCard from '../ProductCard'
import ProductCardInSearch from './ProductCardInSearch'

function Search() {
    const location = useLocation()
    const { searchValue } = location.state
    const [items, setItems] = useState([])

    // const [search, setSearch] = useState("")

    useEffect(() => {
        async function getItemsData() {
            setItems(await getItemsBySearch(searchValue))


        }
        getItemsData()
    }, [searchValue])
    const createPage = () => {
        return items.map(product => <div key={product.id}><ProductCardInSearch product={product} ></ProductCardInSearch></div>)
    }

    return (
        <div>
            <div className='main-div home-div'>
                {items.length === 0 ? <h1>Sorry We Couldn't Find Any Results Matching </h1> : createPage()}
            </div>
            <BasketBallFooter></BasketBallFooter>





        </div>

    )
}

export default Search
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCookie } from '../common/cookie'
import { getWishList, deleteFromWishList } from '../DAL/api'
import ProductCardWishlist from './ProductCardWishlist'
import BasketBallFooter from './Nav&Footer/BasketBallFooter'

function Wishlist() {
    const navigate = useNavigate()
    const [wishlist, setWishList] = useState([])
    useEffect(() => {
        if (getCookie('id') === "") {
            navigate("/")
            return
        }
        async function getWishListData(id) {
            setWishList(await getWishList(id))

        }
        getWishListData(getCookie('id'))
    }, [])

    function createCardItem(item) {
        return <ProductCardWishlist item={item} key={item.item_id} deleteFromWishArr={deleteFromWishArr} ></ProductCardWishlist>
    }
    function deleteFromWishArr(item_id) {
        const itemToDelete = wishlist.find(item => item.item_id === item_id)
        const indexOfDeletedItem = wishlist.indexOf(itemToDelete)
        wishlist.splice(indexOfDeletedItem, 1)
        deleteFromWishList(getCookie('id'), item_id)

        setWishList([...wishlist])

    }


    return (
        <div>

            <div className='main-div'>
                {wishlist.length > 0 ? <div className=''>
                    {wishlist.map(item => createCardItem(item))}

                </div> : <div >
                    <h1>There are currently no items in your wishlist.</h1>
                    <Link className='btn btn-outline-dark' to="/">Start Adding Now</Link>

                </div>

                }

            </div>
            <BasketBallFooter></BasketBallFooter >

        </div>
    )
}

export default Wishlist
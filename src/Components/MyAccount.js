import React, { useEffect, useState } from 'react'
import BasketBallFooter from './Nav&Footer/BasketBallFooter'
import { getCustomerById } from '../DAL/api'
import { getCookie } from '../common/cookie'
import { useNavigate, Link } from 'react-router-dom'

function MyAccount() {
    const [currentCustomer, setCurrentCustomer] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if (getCookie('id') === "") {
            navigate("/")
            return
        }
        async function getCurrentCustomer(id) {
            setCurrentCustomer(await getCustomerById(id))
        }
        getCurrentCustomer(getCookie('id'))


    }, [])

    return (
        <div>
            {Object.keys(currentCustomer).length > 0 ?
                <div className='main-div'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIpad4HAv80fHFhOyWc5B8_wpeklYpmVtmVzxVrctIw3bRdoTbvv86VHZqTHZA-SWvpE&usqp=CAU' alt='avatar'></img>
                    <h1>Hello {currentCustomer[0].first_name}</h1>
                    <div className=''>
                        <Link className='btn btn-outline-warning' to="/MyProfile/editMyAccount">Edit My Profile</Link>
                        <Link className='btn btn-outline-danger' to="/wishlist">My WishList</Link>
                        <Link className='btn btn-outline-warning' to="/MyProfile/orders">My Orders</Link>
                    </div>
                </div> :
                <h1>Loading</h1>
            }
            <BasketBallFooter></BasketBallFooter>


        </div>
    )
}

export default MyAccount
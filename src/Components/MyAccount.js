import React from 'react'
import BasketNavBar from './BasketNavBar'

function MyAccount() {
    return (
        <div>
            <BasketNavBar></BasketNavBar>
            <div className='main-div'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIpad4HAv80fHFhOyWc5B8_wpeklYpmVtmVzxVrctIw3bRdoTbvv86VHZqTHZA-SWvpE&usqp=CAU' alt='avatar'></img>
                <h1>Hello Ronen</h1>
                <div>
                    <button className='btn btn-outline-warning' >Edit My Profile</button>
                    <button className='btn btn-outline-danger' >My WishList</button>
                </div>


            </div>

        </div>
    )
}

export default MyAccount
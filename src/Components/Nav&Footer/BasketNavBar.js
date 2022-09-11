import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { getCookie } from '../../common/cookie';


function BasketNavBar(props) {

    const [showUser, setShowUser] = useState(false)
    const [searchValue, setSearchValue] = useState("")


    useEffect(() => {

        function showMyAccount() {
            if (getCookie('id') !== "") {
                setShowUser(true)
            } else {
                setShowUser(false)
            }
        }
        showMyAccount()

    }, [])

    return (
        <div> <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGW4m-xp6aQmkduDLmhVNvArMXbXG79EykTNz3e7PrkwLSFGKHBI5pfbarC95PwYzVf0&usqp=CAU"
                        alt="basketball" style={{ borderRadius: "5px" }} width="45" height="30" className="d-inline-block align-text-top"></img>
                    Baski
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Category/1">Basketballs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Category/2">Shirts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Category/3">Shoes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                        </li>
                        <li>
                            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                                <input className="form-control me-2 searchi" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)}></input>
                                <Link className="btn btn-outline-light" to={searchValue === "" ? "/" : "/search"} state={{ searchValue }} style={{ border: "none", margin: "2% 0", height: "2rem" }}>🔎</Link>
                            </form>
                        </li>
                    </ul>
                </div>
                <OverlayTrigger
                    trigger="focus"
                    key={'bottom'}
                    placement={'bottom'}
                    overlay={
                        <Popover id={`popover-positioned-${'bottom'}`}>
                            {showUser ?
                                <Popover.Body>
                                    <Link className="btn btn-outline-dark btn-lg icon-btn " to="/MyProfile">My ⛹️‍♂️</Link>
                                    <Link className="btn btn-outline-dark btn-lg icon-btn " to="/" onClick={() => { document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; document.location.reload() }}>Logout</Link>

                                </Popover.Body>
                                :
                                <Popover.Body>
                                    <Link className="btn btn-outline-dark btn-lg icon-btn " to="/Login">Login</Link>
                                    <Link className="btn btn-outline-dark btn-lg icon-btn " to="/Register" >Register</Link>
                                </Popover.Body>

                            }
                        </Popover>
                    }
                >
                    <button className="btn btn-outline-light btn-lg icon-btn " style={{ border: "none" }} type="button" >⛹️‍♂️</button>

                </OverlayTrigger>
                {showUser ? <Link className="btn btn-outline-light btn-lg icon-btn " style={{ border: "none" }} to="/Cart">🛒</Link> : ""}

            </div>
        </nav>
            <Outlet />
        </div>
    )
}

export default BasketNavBar
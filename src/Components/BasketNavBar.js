import React from 'react'
import { Outlet, Link } from "react-router-dom";



function BasketNavBar() {
    return (
        <div> <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#"> */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGW4m-xp6aQmkduDLmhVNvArMXbXG79EykTNz3e7PrkwLSFGKHBI5pfbarC95PwYzVf0&usqp=CAU"
                        alt="basketball" style={{ borderRadius: "5px" }} width="45" height="30" className="d-inline-block align-text-top"></img>
                    Baski
                </Link>
                {/* </a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">

                            <a className="nav-link" href="#">Basketballs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shirts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shoes</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                            {/* <a className="nav-link" href="#">About</a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2 searchi" type="search" placeholder="Search..." aria-label="Search"></input>
                                <button className="btn btn-outline-light" type="submit" style={{ border: "none" }}>🔎</button>
                            </form>
                        </li>
                    </ul>
                </div>
                <form className="d-flex" role="search">
                    <button className="btn btn-outline-light btn-lg icon-btn " style={{ border: "none" }} type="submit">⛹️‍♂️</button>
                    <button className="btn btn-outline-light btn-lg icon-btn " style={{ border: "none" }} type="submit">🛒</button>

                </form>
            </div>
        </nav>
            <Outlet />
        </div>
    )
}

export default BasketNavBar
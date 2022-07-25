import React from 'react'
import { Navbar, Carousel, Card, Button, Container, Nav, Form, FormControl } from 'react-bootstrap'
import BasketNavBar from './BasketNavBar'
import './ProductDetails.css'

function ProductDetails() {
    return (
        <div>



            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGW4m-xp6aQmkduDLmhVNvArMXbXG79EykTNz3e7PrkwLSFGKHBI5pfbarC95PwYzVf0&usqp=CAU"
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                            />{' '}
                            Baski
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="active" href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Basketballs</Nav.Link>
                                <Nav.Link href="#action3">Shirts</Nav.Link>
                                <Nav.Link href="#action4">Shoes</Nav.Link>
                                <Nav.Link href="#action5">About</Nav.Link>
                                <Nav.Link href="#action6">Content</Nav.Link>

                                <Form className="d-flex">
                                    <FormControl
                                        id="search"
                                        type="search"
                                        placeholder="Search..."
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-light">🔎</Button>
                                </Form>
                            </Nav>

                        </Navbar.Collapse>
                        <Button variant="outline-light">⛹️‍♂️</Button>
                        <Button variant="outline-light">🛒</Button>
                    </Container>
                </Navbar> */}




            {/* <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="carousel-item d-block w-15 c-img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwEC8YLmHJBeLr96tBttrvo-WL8yWYhlRkduQ35YG6DGXSOLCCbKNkNyfG5VuBbzFFwc&usqp=CAU"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-item d-block w-15 c-img"
                            src="https://cdn.shopify.com/s/files/1/0249/0122/2485/products/product-image-1148630946_700x700.jpg?v=1631992572"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-item d-block w-15 c-img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ssyYuHOc9VFxi3ObFp5np0L6mqFQ5jdDjY1wd5FkrF7Ry1Fi9I4RGZeYGFUgWZ5qUXo&usqp=CAU"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
                <Card style={{ width: '18rem', border: 'none' }} >
                    <Card.Body >
                        <Card.Title><h1>Spalding Basketball</h1></Card.Title>
                        <Card.Text>
                            Spalding Basketball Indoor Outdoor
                            Nba Wear-resistant Competition
                            Basketball Equipment Basket ball
                        </Card.Text>
                        <div className="buttonDiv">
                            <button type="button" className="btn btn-outline-danger wishlist btn-lg">Add to wishlist ❤</button>
                            <button type="button" className="btn btn-outline-warning btn-lg">Add to cart 🛒</button>
                        </div>
                    </Card.Body>
                </Card> */}
            <div className="item">
                <div className="row g-5">
                    <div className="col-md-3">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwEC8YLmHJBeLr96tBttrvo-WL8yWYhlRkduQ35YG6DGXSOLCCbKNkNyfG5VuBbzFFwc&usqp=CAU"
                                        className="d-block w-100" alt="..."></img>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0249/0122/2485/products/product-image-1148630946_700x700.jpg?v=1631992572"
                                        className="d-block w-100" alt="..."></img>

                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ssyYuHOc9VFxi3ObFp5np0L6mqFQ5jdDjY1wd5FkrF7Ry1Fi9I4RGZeYGFUgWZ5qUXo&usqp=CAU"
                                        className="d-block w-100" alt="..."></img>

                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h1 className="card-title">Spalding Basketball</h1>
                            <h5 className="card-text">Spalding Basketball Indoor Outdoor Nba Wear-resistant Competition  Basketball
                                Equipment Basket ball</h5>
                            <h3 className="card-text">200$</h3>
                            <div >
                                <button type="button" className="btn btn-outline-danger btn-lg wishlist">Add to wishlist ❤</button>

                                <button type="button" className="btn btn-outline-warning btn-lg">Add to cart 🛒</button>

                            </div>


                        </div>
                    </div>
                </div>
            </div>




            {/* 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGW4m-xp6aQmkduDLmhVNvArMXbXG79EykTNz3e7PrkwLSFGKHBI5pfbarC95PwYzVf0&usqp=CAU" alt="basketball"  ></img>
                        Baski
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
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
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2 searchi" type="search" placeholder="Search..." aria-label="Search"></input>
                                    <button className="btn btn-outline-light" type="submit">🔎</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-light btn-lg icon-btn" type="submit">⛹️‍♂️</button>
                        <button className="btn btn-outline-light btn-lg icon-btn" type="submit">🛒</button>

                    </form>
                </div>
            </nav>
            <div className="item">
                <div className="row g-5">
                    <div className="col-md-3">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwEC8YLmHJBeLr96tBttrvo-WL8yWYhlRkduQ35YG6DGXSOLCCbKNkNyfG5VuBbzFFwc&usqp=CAU" className="d-block w-100" alt="..."></img>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="https://cdn.shopify.com/s/files/1/0249/0122/2485/products/product-image-1148630946_700x700.jpg?v=1631992572" className="d-block w-100" alt="..."></img>

                                </div>
                                <div className="carousel-item">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ssyYuHOc9VFxi3ObFp5np0L6mqFQ5jdDjY1wd5FkrF7Ry1Fi9I4RGZeYGFUgWZ5qUXo&usqp=CAU" className="d-block w-100" alt="..."></img>

                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h1 className="card-title">Spalding Basketball</h1>
                            <h5 className="card-text">Spalding Basketball Indoor Outdoor <br></br> Nba Wear-resistant Competition <br></br> Basketball Equipment Basket ball</h5>
                            <h3 className="card-text">200$</h3><br></br><br></br>
                            <button type="button" className="btn btn-outline-danger btn-lg">Add to wishlist ❤</button>
                            &nbsp&nbsp
                            <button type="button" className="btn btn-outline-warning btn-lg">Add to cart 🛒</button>

                        </div>
                    </div>
                </div>
            </div>



            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Baski, Inc</span>
                </div>


            </footer> */}

        </div >
    )
}

export default ProductDetails
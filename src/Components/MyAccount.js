import React, { useEffect, useState } from 'react'
import BasketBallFooter from './Nav&Footer/BasketBallFooter'
import { getCustomerById } from '../DAL/api'
import { getCookie } from '../common/cookie'
import { useNavigate, Link, NavLink, Outlet } from 'react-router-dom'
import { MobileView, BrowserView, isMobile } from 'react-device-detect';
import * as rdd from 'react-device-detect';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
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
                <div className='my_account'>

                    {
                        isMobile ?
                            <> <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                                <Container>

                                    <Nav className="me-auto">
                                        <Link className='nav-link' to="/MyProfile/wishlist">❤</Link>

                                    </Nav>
                                    <Nav className="me-auto">
                                        <Link className='nav-link' to="/MyProfile/orders">My Orders</Link>

                                    </Nav>
                                    <Nav className="me-auto">
                                        <Link className='nav-link' to="/MyProfile/editMyAccount">Edit Profile</Link>

                                    </Nav>
                                    <Nav className="me-auto">
                                        <Link className='nav-link' to="/MyProfile/changePassword">Change Password</Link>
                                    </Nav>

                                </Container>
                            </Navbar>
                                <Outlet />
                            </>

                            :
                            <>
                                <div style={{ display: 'flex', height: '100%', zIndex: "0", position: "fixed", top: "0px" }}>
                                    <CDBSidebar textColor="#fff" backgroundColor="#333" >
                                        <CDBSidebarHeader style={{ marginTop: "70%" }} >
                                            <p className="text-decoration-none" style={{ color: 'inherit' }}>
                                                Hello {currentCustomer[0].first_name}
                                            </p>
                                        </CDBSidebarHeader>

                                        <CDBSidebarContent className="sidebar-content">
                                            <CDBSidebarMenu>


                                                <NavLink to="/MyProfile/wishlist" className={(navData) => (navData.isActive ? "active-style" : 'none')}>
                                                    <CDBSidebarMenuItem icon="heart">My WishList</CDBSidebarMenuItem>
                                                </NavLink>
                                                <NavLink to="/MyProfile/orders" className={(navData) => (navData.isActive ? "active-style" : 'none')}>
                                                    <CDBSidebarMenuItem icon="table">My Orders</CDBSidebarMenuItem>
                                                </NavLink>
                                                <NavLink to="/MyProfile/editMyAccount" className={(navData) => (navData.isActive ? "active-style" : 'none')}>
                                                    <CDBSidebarMenuItem icon="edit">Edit My Profile</CDBSidebarMenuItem>
                                                </NavLink>
                                                <NavLink to="/MyProfile/changePassword" className={(navData) => (navData.isActive ? "active-style" : 'none')}>
                                                    <CDBSidebarMenuItem icon="pen">Change Password</CDBSidebarMenuItem>
                                                </NavLink>


                                            </CDBSidebarMenu>
                                        </CDBSidebarContent>

                                    </CDBSidebar>
                                </div>
                                <Outlet />
                            </>




                    }</div> : null}
            <BasketBallFooter></BasketBallFooter>


        </div >
    )
}

export default MyAccount
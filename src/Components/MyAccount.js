import React, { useEffect, useState } from 'react'
import BasketBallFooter from './Nav&Footer/BasketBallFooter'
import { getCustomerById } from '../DAL/api'
import { getCookie } from '../common/cookie'
import { useNavigate, Link, NavLink } from 'react-router-dom'
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
                <div className='main-div'>

                    {/* <div className=''>
                        <Link className='btn btn-outline-warning' to="/MyProfile/editMyAccount">Edit My Profile</Link>
                        <Link className='btn btn-outline-danger' to="/wishlist">My WishList</Link>
                        <Link className='btn btn-outline-warning' to="/MyProfile/orders">My Orders</Link>
                        <Link className='btn btn-outline-danger' to="/MyProfile/changePassword">Change Password</Link>
                    </div> */}
                    <div style={{ display: 'flex', height: '90%' }}>
                        <CDBSidebar textColor="#fff" backgroundColor="#333">
                            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                                <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                                    Hello {currentCustomer[0].first_name}
                                </a>
                            </CDBSidebarHeader>

                            <CDBSidebarContent className="sidebar-content">
                                <CDBSidebarMenu>
                                    <NavLink exact to="/MyProfile/wishlist" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="heart">My WishList</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to="/MyProfile/orders" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="table">My Orders</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to="/MyProfile/editMyAccount" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="edit">Edit My Profile</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to="/MyProfile/changePassword" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="pen">Change Password</CDBSidebarMenuItem>
                                    </NavLink>


                                </CDBSidebarMenu>
                            </CDBSidebarContent>

                        </CDBSidebar>
                    </div>
                </div> :
                null
            }
            <BasketBallFooter></BasketBallFooter>


        </div>
    )
}

export default MyAccount
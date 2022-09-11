import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';

export default function BasketBallFooter() {
    return (

        <div className='footer'>
            <CDBFooter className="shadow">
                <CDBBox
                    display="flex"
                    justifyContent="between"
                    alignItems="center"
                    className="mx-auto py-4 flex-wrap"
                    style={{ width: '80%' }}
                >
                    <CDBBox display="flex" alignItems="center">
                        <a href="/" className="d-flex align-items-center p-0 text-dark">

                            <span className="ml-4 h5 mb-0 font-weight-bold">Baski </span>
                        </a>
                        <small className="ml-2">&copy; Baski, 2022. All rights reserved.</small>
                    </CDBBox>
                    <CDBBox display="flex">
                        <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="facebook-f" />
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="mx-3 p-2">
                            <CDBIcon fab icon="twitter" />
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="instagram" />
                        </CDBBtn>
                    </CDBBox>
                </CDBBox>
            </CDBFooter>

        </div>

    );
};
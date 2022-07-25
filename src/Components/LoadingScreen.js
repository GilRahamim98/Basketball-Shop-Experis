import React from 'react'
import ReactLoading from "react-loading";

function LoadingScreen() {
    return (
        <ReactLoading
            type="spin"
            color="#FF0000"
            height={'30vh'}
            width={'30vw'}
        />
    )
}

export default LoadingScreen
import React from 'react'
import BasketNavBar from './BasketNavBar'
import ProductInCartCard from './ProductInCartCard'

function Cart() {
    return (
        <div>
            <BasketNavBar></BasketNavBar>
            <ProductInCartCard orderId={1}></ProductInCartCard>
        </div>
    )
}

export default Cart
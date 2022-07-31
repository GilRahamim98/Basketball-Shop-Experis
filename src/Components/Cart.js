import React from 'react'
import BasketNavBar from './BasketNavBar'
import ProductInCartCard from './ProductInCartCard'
import BasketBallFooter from './BasketBallFooter'


function Cart() {
    return (
        <div>
            <ProductInCartCard orderId={1}></ProductInCartCard>
            <BasketBallFooter></BasketBallFooter>

        </div>
    )
}

export default Cart
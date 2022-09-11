import { setCookie } from "../common/cookie"

export const getProducts = () => {
    return fetch('http://localhost:4000/api/items').then(response => response.json()).then(products => products)
}
export const getProductById = async (id) => {
    return fetch(`http://localhost:4000/api/items/${id}`).then(response => response.json()).then(product => product)
}
export const getProductsByCategory = (categoryId) => {
    return fetch(`http://localhost:4000/api/category/${categoryId}`).then(response => response.json()).then(product => product)
}

export const getProductImagesById = (id) => {
    return fetch(`http://localhost:4000/api/item-images/${id}`).then(response => response.json()).then(products => products)
}
export const getProductFirstImageById = (id) => {
    return fetch(`http://localhost:4000/api/item-images/${id}`).then(response => response.json()).then(images => images[0])
}
export const getCustomerById = (id) => {
    return fetch(`http://localhost:4000/api/customers/${id}`).then(response => response.json()).then(customer => customer)
}

export const getOrderDetailsByOrderId = async (id) => {
    return fetch(`http://localhost:4000/api/order-details/${id}`).then(response => response.json()).then(orderDetails => orderDetails)
}
export const getCartByUserId = async (id) => {
    return fetch(`http://localhost:4000/api/orders/cart/${id}`).then(response => response.json()).then(cart => cart)
}
export const loginFunction = async (username, password) => {
    return fetch(`http://localhost:4000/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(response => response.json()).then(data => {
        if (data.message) {
            return data
        } else {
            setCookie('id', JSON.stringify(data), 5)
        }
    })
}
export const registerFunction = async (first_name, last_name, user_name, birth_day, email, phone, city, register_date, street, password) => {
    return fetch(`http://localhost:4000/api/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name,
            last_name,
            birth_day,
            user_name,
            email,
            phone,
            street,
            city,
            register_date,
            password
        })
    }).then(response => response.json()).then(data => {
        if (data.message) {
            return data
        } else {
            setCookie('id', JSON.stringify(data), 5)
        }
    })
}

export const changeOrderDetails = async (order_id, item_id, quantity) => {
    return fetch(`http://localhost:4000/api/order-details/${order_id}/${item_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            quantity
        })
    }).then(response => response.json())
}
export const deleteOrderDetails = async (order_id, item_id) => {
    return fetch(`http://localhost:4000/api/order-details/${order_id}/${item_id}`, {
        method: 'DELETE'
    }).then(response => response.json())
}
export const addToOrderDetails = async (order_id, item_id, quantity, unit_price) => {
    return fetch(`http://localhost:4000/api/order-details`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            order_id,
            item_id,
            quantity,
            unit_price
        })
    }).then(response => response.json())

}

export const createNewOrder = async (customer_id) => {
    return fetch(`http://localhost:4000/api/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customer_id
        })
    }).then(response => response.json())
}

export const buyCart = async (order_id, ship_address) => {
    return fetch(`http://localhost:4000/api/orders/${order_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            order_date: new Date(),
            ship_address
        })
    }).then(response => response.json())
}

export const getWishList = async (customer_id) => {
    return fetch(`http://localhost:4000/api/wishlists/${customer_id}`).then(response => response.json()).then(wishlist => wishlist)
}

export const addToWishList = async (customer_id, item_id) => {
    return fetch(`http://localhost:4000/api/wishlists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customer_id,
            item_id
        })
    }).then(response => response.json())

}
export const deleteFromWishList = (customer_id, item_id) => {
    return fetch(`http://localhost:4000/api/wishlists/${customer_id}/${item_id}`, {
        method: 'DELETE'
    }).then(response => response.json())

}
export const updateCustomerProfile = async (customer_id, first_name, last_name, birth_day, phone, city, street) => {
    return fetch(`http://localhost:4000/api/customers/${customer_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name,
            last_name,
            birth_day,
            phone,
            city,
            street
        })
    }).then(response => response.json())

}

export const getOrdersByCustomerId = async (customer_id) => {
    return fetch(`http://localhost:4000/api/orders/${customer_id}`).then(response => response.json()).then(orders => orders)
}

export const getCustomerStreet = async (customer_id) => {
    return fetch(`http://localhost:4000/api/customers/street/${customer_id}`).then(response => response.json()).then(street => street)
}

export const getItemsBySearch = async (searchValue) => {
    return fetch(`http://localhost:4000/api/items/search?Search="${searchValue}"`).then(response => response.json()).then(items => items)
}

export const updatePassword = async (customer_id, password) => {
    return fetch(`http://localhost:4000/api/customers/changePassword/${customer_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password
        })

    }).then(response => response.json())
}
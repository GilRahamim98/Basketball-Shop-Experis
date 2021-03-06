const products = [
    {
        id: 1,
        name: "Spalding Basketball",
        description: "Spalding Basketball Indoor Outdoor Nba Wear-resistant Competition  Basketball Equipment Basket ball",
        categoryId: 1,
        unitPrice: 200,
        unitsInStock: 5
    },
    {
        id: 2,
        name: "Michael Jordan Jersey",
        description: "AUTHENTIC JERSEY CHICAGO BULLS '95 - MICHAEL JORDAN",
        categoryId: 2,
        unitPrice: 300,
        unitsInStock: 10
    }
]
const productImages = [
    {
        imageId: 1,
        productId: 2,
        src: "https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4314000/ff_4314197-2cff4f0ba5d784106a71_full.jpg&w=340"
    },
    {
        imageId: 2,
        productId: 2,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmOSHQPoCYBd5AziH_i_zwirGtuVZO1sAclAfxZu1cmX5w90FT8-UGRddH2zj-MiQdqQ&usqp=CAU"
    },
    {
        imageId: 3,
        productId: 2,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WoyqszNnvrFuLJmZ-PT6Ak190hB0MsNxv7XNkKKblHEyeMDqlm8pSU56MxhVo-fT7SE&usqp=CAU"
    },
    {
        imageId: 4,
        productId: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwEC8YLmHJBeLr96tBttrvo-WL8yWYhlRkduQ35YG6DGXSOLCCbKNkNyfG5VuBbzFFwc&usqp=CAU"
    },
    {
        imageId: 5,
        productId: 1,
        src: "https://cdn.shopify.com/s/files/1/0249/0122/2485/products/product-image-1148630946_700x700.jpg?v=1631992572"
    },
    {
        imageId: 6,
        productId: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ssyYuHOc9VFxi3ObFp5np0L6mqFQ5jdDjY1wd5FkrF7Ry1Fi9I4RGZeYGFUgWZ5qUXo&usqp=CAU"
    }
]
const categories = [
    {
        categoryId: 1,
        categoryName: "Basketballs"
    },
    {
        categoryId: 2,
        categoryName: "Shirts"
    },
    {
        categoryId: 3,
        categoryName: "Shoes"
    }
]
const orderDetails = [
    {
        orderId: 1,
        productId: 2,
        quantity: 2,
        unitPrice: 300
    },
    {
        orderId: 1,
        productId: 1,
        quantity: 4,
        unitPrice: 200
    },
]
const orders = [
    {
        id: 1,
        cutomerId: 1,
        orderDate: "12-07-2022",
        shippedDate: "20-07-2022",
        shipAddress: "Holon,Golmb 23"

    },
]

const customers = [
    {
        id: 1,
        firstName: "Noam",
        lastName: "Miko",
        birthDate: "02-02-2001",
        userName: "Noam02",
        email: "noamiko23@gmail.com",
        phone: "0525381648",
        street: "Golmb 23 ",
        city: "Holon",
        registerDate: "02-06-2022",
        password: "Aa123456"
    },
    {
        id: 2,
        firstName: "Amit",
        lastName: "Idan",
        birthDate: "01-09-2002",
        userName: "Amiti",
        email: "amitmit@gmail.com",
        phone: "0525381642",
        street: "Gorbachi 9 ",
        city: "Eilat",
        registerDate: "01-05-2022",
        password: "456789Bb"
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 1000)
    })
}
export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products.filter(product => product.id === id)), 1000)
    })
}
export const getProductImges = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(productImages), 1000)
    })
}
export const getProductImagesById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(productImages.filter(image => image.productId === id)), 1000)
    })
}
export const getProductFirstImageById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(productImages.filter(image => image.productId === id)[0]), 1000)
    })
}
export const getCustomerById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(customers.filter(customer => customer.id === id)), 1000)
    })

}
export const getOrderByCustomerId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(orders.filter(order => order.customerId === id)), 1000)
    })

}
export const getOrderDetailsByOrderId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(orderDetails.filter(orderDetail => orderDetail.orderId === id)), 1000)
    })

}
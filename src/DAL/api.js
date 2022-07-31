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
    },
    {
        id: 3,
        name: "Air Jordan XXXVI",
        description: "The Air Jordan XXXVI isn't just the next shoe up in the iconic franchise, it's an expression of the drive and energy that sparked a basketball revolution.It's one of the lightest Air Jordan game shoes to date, featuring minimal but durable Leno-Weave upper reinforced with a TPU ribbon",
        categoryId: 3,
        unitPrice: 400,
        unitsInStock: 15
    },
    {
        id: 4,
        name: "LeBron 19",
        description: "LeBron plays less in the paint and more at the point, so it makes sense that he wants to feel a little quicker. His 19th signature gives you the feeling of containment but with a lighter design that's ideal for fast, strong players like LeBron who stretch the court.",
        categoryId: 3,
        unitPrice: 350,
        unitsInStock: 20
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
    },
    {
        imageId: 7,
        productId: 3,
        src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/978f5e8a-3753-4950-8174-723b309b6e6c/air-jordan-xxxvi-low-basketball-shoes-nJBBHH.png"
    },
    {
        imageId: 8,
        productId: 3,
        src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/72d2a488-a065-47a1-bf66-e8adfe0ba1f7/air-jordan-xxxvi-low-mens-basketball-shoes-LgcvQl.png"
    },
    {
        imageId: 9,
        productId: 3,
        src: "https://cdn.shopify.com/s/files/1/0267/9232/9325/products/DH0833-660-3_620x.jpg?v=165531580"
    },
    {
        imageId: 10,
        productId: 4,
        src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/465ab10b-d24f-4d78-98eb-f94db71fbdbd/lebron-19-basketball-shoes-Tshbtg.png"
    },
    {
        imageId: 11,
        productId: 4,
        src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/58ae40db-4bab-441a-ba47-0c1ac4755654/lebron-19-basketball-shoes-Tshbtg.png"
    },
    {
        imageId: 12,
        productId: 4,
        src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c13adec0-4806-4540-b499-66952d851ad7/lebron-19-basketball-shoes-Tshbtg.png"
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
    {
        orderId: 2,
        productId: 1,
        quantity: 3,
        unitPrice: 200
    },
    {
        orderId: 2,
        productId: 3,
        quantity: 5,
        unitPrice: 400
    }
]
const orders = [
    {
        id: 1,
        cutomerId: 1,
        orderDate: "12-07-2022",
        shippedDate: "20-07-2022",
        shipAddress: "Holon,Golmb 23"

    },
    {
        id: 2,
        customer: 3,
        orderDate: "13-07-2022",
        shippedDate: "25-07-2022",
        shipAddress: "Ashdod,Roze 4"
    }
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
    {
        id: 3,
        firstName: "Dana",
        lastName: "Modan",
        birthDate: "03-01-2000",
        userName: "Dana45",
        email: "dandan@gmail.com",
        phone: "0525381622",
        street: "Roze 4 ",
        city: "Ashdod",
        registerDate: "07-05-2022",
        password: "QweAsd123"
    },
    {
        id: 4,
        firstName: "Rozi",
        lastName: "Haviv",
        birthDate: "02-07-1993",
        userName: "Roza",
        email: "rozrozi@gmail.com",
        phone: "0525381742",
        street: "Vered ",
        city: "Eilat",
        registerDate: "07-06-2022",
        password: "ZXCasd789"
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
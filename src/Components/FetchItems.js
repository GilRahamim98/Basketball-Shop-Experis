import { useState, useEffect } from "react"
import { getProductFirstImageById, getProductById } from "../DAL/api"

export const useFetchItems = (id) => {
    const [product, setProduct] = useState([])
    useEffect(() => {

        async function getProducts() {
            setProduct(await getProductById(id))

        }
        getProducts(id)

    }, [])
}
export const useFetchImages = (id) => {
    const [productImage, setProductImage] = useState([])
    useEffect(() => {
        async function getImages() {
            setProductImage(await getProductFirstImageById(id))
        }
        getImages(id)

    }, [])

}

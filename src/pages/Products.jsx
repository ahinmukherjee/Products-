import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            let { data } = await axios.get('https://dummyjson.com/products')
            setProducts(data.products)
        } catch (error) {
            console.log(error);

        }
    }
    console.log(products);

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <br />

            {
                products.map((p) => {
                    return <div key={p.id}>
                        <p>Title : {p.title}</p>
                        <img src={p.thumbnail} alt="" />
                        <p>Description : {p.description}</p>
                        <p>Price : ${p.price}</p>
                        <p>Ratting : {p.rating}</p>
                        <p>Category : {p.category}</p>                      
                        {/* <p>Reviews: {p.reviews}</p>
                        <p>Discount offer : {p.discountPercentage}</p> */}


                    <br />
                    </div>
                }
            )}
        </div>  

    )

}

export default Products
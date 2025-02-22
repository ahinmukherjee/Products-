// import React, { useCallback } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import "../style/product.css";
import { Link } from 'react-router-dom';
const Products = () => {
    const [products, setProducts] = useState([])
    const[cards, setcards]= useState([])

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

    // function Mycomponent(){

    // const Call = async () =>{
    //     try {
    //         let { id } = await axios.get('https://dummyjson.com/products')
    //         setcards(id.products)
    //     } catch (error) {
    //         console.log(error);

    //     }
    
    // }
    // console.log(cards);
    

    // useEffect(()=>{
    //     Call()
    // }, [])


    // }
    return (
    <div className="product-container">
        {products.map((p) => (
            <div className="product-card" key={p.id}>
                <p className="title">{p.title}</p>
                <img src={p.thumbnail} alt={p.title} className="product-image" />
                <p>Description: {p.description}</p>
                <p>Price: ${p.price}</p>
                <p>Rating: {p.rating} ⭐⭐⭐</p>
                <p>Category: {p.category}</p>
                <p>Discount Offer: {p.discountPercentage}%</p>

                <div className="reviews">
                    <h3>Reviews:</h3>
                    {p.reviews && p.reviews.length > 0 ? (
                    <ol>
                        {p.reviews.map((review, index) => (
                        <li key={index}>
                            <strong>{review.reviwerName}</strong> {review.comment}
                        </li>
                        ))}
                    </ol>
                    ) : (
                    <p>No reviews available</p>
                    )}
                </div>
                <Link to={`/cards/${p.id}`}className="link">
                        View more...
                </Link>
            </div>
        ))}
    </div>

    )

}

export default Products
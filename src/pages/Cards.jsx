import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../style/cards.css";

const Cards = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    // const[cards, setcards]= useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="product-details">
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} className="product_image" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating} ⭐⭐⭐</p>
            <p>Availabel: {product.availabilityStatus}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p>Discount Offer: {product.discountPercentage}%</p>
            <p>Product Return: {product.returnPolicy}</p>
            <p>Warrenty: {product.warrantyInformation}</p>                             

            <div className="reviews_box">
                    <h3>Reviews:</h3>
                    {product.reviews && product.reviews.length > 0 ? (
                    <ol>
                        {product.reviews.map((review, index) => (
                        <li key={index}>
                            <strong>{review.reviwerName}</strong> {review.comment}
                        </li>
                        ))}
                    </ol>
                    ) : (
                    <p>No reviews available</p>
                    )}
                </div>

        </div>
    );
};

export default Cards;
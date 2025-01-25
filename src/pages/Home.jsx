import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/home.css";

const Home = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            let { data } = await axios.get('https://dummyjson.com/products')
            setProducts(data.products.slice(0,6))
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
                    return <div class="key" key={p.id}>
                        <div className="box">
                        <p class="title">Title : {p.title}</p>
                        <img class="image" src={p.thumbnail} alt="" />
                        <p class="desc"><p class="product">Description :</p> {p.description}</p>
                        <p class="price"><p class="product">Price :</p> ${p.price}</p>
                        <p class="category"><p class="product">Category :</p> {p.category}</p>
                        <br />

                        <Link to="./products" class="link">View more....</Link>
                        </div>
                    </div>
                }
                )}
        </div>
    )
}

export default Home
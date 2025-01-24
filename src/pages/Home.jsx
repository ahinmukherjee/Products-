import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/home.css";

const Home = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            let { data } = await axios.get('https://dummyjson.com/products')
            setProducts(data.products.slice(0,5))
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
                        <p>Category : {p.category}</p>
                        <br />

                        <Link to="./products">View more....</Link>
                    </div>
                }
                )}
        </div>
    )
}

export default Home
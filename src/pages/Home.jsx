import axios from 'axios';
import { useEffect, useState } from 'react';
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
        // <div>
        //     <br />

        //     {
        //         products.map((p) => {
        //             return <div class="key" key={p.id}>
        //                 <div className="box">
        //                 <p class="title">Title : {p.title}</p>
        //                 <img class="image" src={p.thumbnail} alt="" />
        //                 <p class="desc product">Description : {p.description}</p>
        //                 <p class="price product">Price :${p.price}</p>
        //                 <p class="category product">Category :{p.category}</p>
    
        //                 <Link to="./products" class="link">View more....</Link>
        //                 </div>
        //             </div>
        //         }
        //         )}
        // </div>

    <div className="container">
      {products.map((p) => (
        <div className="products" key={p.id}>
          {/* <div className="box"> */}
            <p className="titles">Title: {p.title}</p>
            <img className="image" src={p.thumbnail} alt={p.title} />
            <p className="desc product">Description: {p.description}</p>
            <p className="price product">Price: ${p.price}</p>
            <p className="category product">Category: {p.category}</p>
          {/* </div> */}
        </div>
      ))}
    </div>
    )
}

export default Home
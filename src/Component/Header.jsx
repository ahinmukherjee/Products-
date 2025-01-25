import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "../style/header.css";

const Header = () => {
    const activeLocation = useLocation().pathname;
  return (
    <header className="navber">

      <div className="menuContainer">
                        <Link class="links"
                            to="/"
                            className={activeLocation === "/" ? "menuActive" : ""}
                        >
                            Home
                        </Link>

                        <Link class="links"
                            to="/products"
                            className={activeLocation === "/products" ? "menuActive" : ""}
                        >
                            Products
                        </Link>
        </div>
    </header>
  )
}

export default Header
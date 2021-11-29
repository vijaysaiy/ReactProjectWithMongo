import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "./logo.webp";
import "./Navbar.css";
import { getTotalQuantity } from "../../redux/cartRedux";
//momentum-ui
import { Input, Icon } from "@momentum-ui/react";
import ProductsMenu from "./ProductsMenu";
import AccountMenu from "./AccountMenu";

function Navbar({ click }) {
  const { products } = useSelector((state) => state.cart);
  const [search, setSearch] = useState("all");
  function handleSearch(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="search-box">
        <Input
          name="defaultInput"
          label="Default Input"       
          inputSize="small-5"
          placeholder="Search"
          onChange={handleSearch}
        />
        <Link to={`/products/${search}`}>
          <Icon name="icon-search_24" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <ProductsMenu />
        </li>
        <li>
          <AccountMenu />
        </li>
        <li>
          <Link to="/cart" className="cart-link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo-badge">
                {getTotalQuantity(products)}
              </span>
            </span>
          </Link>
        </li>
      </ul>
      <div className="hamburger-menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;

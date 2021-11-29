import "./SideDrawer.css";

import { React, useState } from "react";
import { Link } from "react-router-dom";
import { getTotalQuantity } from "../redux/cartRedux";
import { useSelector } from "react-redux";
import { Input, Icon } from "@momentum-ui/react";

function SideDrawer({ show, click }) {
  const { products } = useSelector((state) => state.cart);

  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  const [search, setSearch] = useState("all");
  function handleSearch(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <div className="sidesearch-box">
        <Input
          name="defaultInput"
                
          inputSize="small-5"
          placeholder="Search"
          onChange={handleSearch}
        />
        <Link to={`/products/${search}`}>
          <Icon name="icon-search_24" />
        </Link>
      </div>
      <ul className="sidedrawer-links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="sidedrawer-cartbadge">
                {getTotalQuantity(products)}
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/products/all">Products</Link>
        </li>

        <li>
          <Link to="/products/mobiles">Mobiles</Link>
        </li>
        <li>
          <Link to="/products/accesories">Accessories</Link>
        </li>
        <li>
          <Link to="/products/earphones">Earphones</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;

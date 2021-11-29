//single product page

import "./Product.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { addToCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { addToCartDb } from "../redux/apiCalls";
import { Button } from "@momentum-ui/react";
function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/products/find/${id}`
        );
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, [id]);

  const qtyHandler = (type) => {
    if (type === "decrement") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      quantity < 5 && setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    dispatch(addToCart({ ...product, quantity }));
    addToCartDb(dispatch, { ...product, quantity });
  };

  return (
    <div className="products">
      <div className="products-left">
        <div className="left-image">
          <img src={product.imgSrc} alt="product-logo" />
        </div>
        <div className="left-info">
          <p className="left-name">{product.name}</p>
          <p className="left-price">₹{product.price}</p>
          <p className="left-description">
            MRP&nbsp;<strike>₹{product.mrp}</strike>
          </p>
        </div>
      </div>
      <div className="products-right">
        <div className="right-info">
          <p>
            Price:<span className="right-price">₹{product.price}</span>
          </p>
          <p>
            Status:<span>In stock</span>
          </p>
          <div className="quantity">
            Qty
            <Button
              
              onClick={() => qtyHandler("decrement")}
              ariaLabel="Cancel"
              color="red"
              circle
              children="-"
            />
            {quantity}
            <Button
              
              onClick={() => qtyHandler("increment")}
              ariaLabel="Cancel"
              color="green"
              circle
              children="+"
            />
          </div>
          <p>
            <Button children="Add to Cart" color="blue" onClick={handleClick}/>
              
           
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;

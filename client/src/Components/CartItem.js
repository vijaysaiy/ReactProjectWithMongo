import "./CartItem.css";
import { Link } from "react-router-dom";
import React from "react";

//momentum ui
import { Button } from '@momentum-ui/react';
import { CallControl ,Icon} from "@momentum-ui/react";

import { removeFromCart, setNewQuantity } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { deleteCartDb } from "../redux/apiCalls";

function CartItem(product) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeFromCart(product._id));
    deleteCartDb(dispatch, product._id);
  };

  const qtyHandler = (type, id, qty) => {
    if (type === "decrement") {
      qty > 1 && qty--;
    } else {
      qty++;
    }
    console.log(id,qty)
    dispatch(setNewQuantity({ id, qty }));
  };

  return (
    <div className="cart-item" key={product._id}>
      <div className="cart-item-image">
        <img src={product.imgSrc} alt="prdouct-iamge" />
      </div>
      <div className="cart-item-info">
        <Link to={`/product/${product._id}`} className="cart-item-name">
          <p>{product.name}</p>
        </Link>
        <p className="cart-item-price">₹{product.price}</p>
        <p className="quantity">
          Qty:&nbsp;
          <Button              
              onClick={() => qtyHandler("decrement", product._id, product.quantity)}              
              color="red"
              size="small"
              circle
              children="-"
            />
          {product.quantity}
          <Button         
              onClick={() => qtyHandler("increment", product._id, product.quantity)}             
              color="green"             
              circle
              children="+"              
            />
          <CallControl
            type="cancel"
            size="small"
            onClick={handleClick}
            ariaLabel="Remove"
            color="red"
          />
       
        </p>
      </div>
      <p className="subtotal">₹{product.price * product.quantity}</p>
     
    </div>
  );
}

export default CartItem;

import "./Cart.css";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {getTotalPrice,getTotalQuantity} from '../redux/cartRedux'
import {Button} from '@momentum-ui/react'
function Cart() {
  const { products  } = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart-left">
        <div className="cart-left-upperrow">
          <h2>Shopping Cart</h2>
          <p>Subtotal</p>
        </div>
        {!getTotalQuantity(products) ? (
          <div className="cart-empty">
            <h3>Cart is Empty! </h3>
            <Link to="/products/all">
            <Button color="blue" children ="Shop Now"/>
            </Link>
          </div>
        ) : (
          products.map((product) => {
            return <CartItem key = {product._id} {...product} />;
          })
        )}
      </div>

      <div className="cart-right">
        <div className="cart-info">
          <p>Total&nbsp;({getTotalQuantity(products)}) items</p>
          <p className = "total">₹{getTotalPrice(products)}</p>
        </div>
        <div>
          <Button color="blue" children ="Proceed to Checkout"  />
        </div>
      </div>
    </div>
  );
}

export default Cart;

import "./Product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartDb} from "../redux/apiCalls";
import { addToCart } from "../redux/cartRedux";
import { Button } from "@momentum-ui/react";


function Product(item, id) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    addToCartDb(dispatch, { ...item, quantity: 1 });
  };
  return (
    <div className="product" key={id}>
      <Link to={`/product/${item._id}`}>
        <img src={item.imgSrc} alt="product-logo" />
      </Link>
      <div className="product-info">
        <p className="info-name">
          <Link to={`/product/${item._id}`}>{item.name}</Link>
        </p>
        <p className="info-price">₹{item.price}</p>
        <Button className="info-button" color = "blue" onClick={handleClick}>
          Add to Cart
        </Button>
        
      </div>
    </div>
  );
}

export default Product;

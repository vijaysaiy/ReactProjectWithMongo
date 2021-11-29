import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getProducts } from "../redux/apiCalls";

function Products({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPIData = async () =>{
    const data = await getProducts(category);         
    setProducts(data);
    }
    fetchAPIData();
  }, [category]);

  return (
    <>
      {products.map((item) => {
        return <Product key = {item._id} {...item} id={item._id} />;
      })}
    </>
  );
}

export default Products;

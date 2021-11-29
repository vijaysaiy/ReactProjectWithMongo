import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  addToCartDbStart,
  addToCartDbSuccess,
  addToCartDbFailure,
  updateCartDbStart,
  updateCartDbSuccess,
  deleteCartDbStart,
  deleteCartDbSuccess,
  deleteCartDbFailure,
} from "./cartSlice";

import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:4000/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};
export const getCartDb = async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/cart/all");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const addToCartDb = async (dispatch, cart, quantity) => {
  dispatch(addToCartDbStart());
  try {
    const res = await axios.post(
      "http://localhost:4000/api/cart",
      cart,
      quantity
    );
    dispatch(addToCartDbSuccess(res.data));
  } catch (error) {
    dispatch(addToCartDbFailure());
  }
};
export const updateCartDb = async (dispatch, cart, quantity) => {
  dispatch(updateCartDbStart());
  try {
    const res = await axios.put(
      "http://localhost:4000/api/cart/" + cart,
      quantity
    );
    dispatch(updateCartDbSuccess(res.data));
  } catch (error) {}
};
export const deleteCartDb = async (dispatch, id) => {
  dispatch(deleteCartDbStart());
  try {
    const res = await axios.delete(`http://localhost:4000/api/cart/` + id);
    dispatch(deleteCartDbSuccess(res.data));
  } catch (error) {
    dispatch(deleteCartDbFailure(error));
  }
};
export const getProducts = async (category) => {
  try {
    const res = await axios.get(
      category
        ? `http://localhost:4000/api/products?category=${category}`
        : "http://localhost:4000/api/products"
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

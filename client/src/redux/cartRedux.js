import { createSlice } from "@reduxjs/toolkit";

export const getTotalPrice = (products) => {
  return products.reduce((sum, { price, quantity }) => sum + price * quantity,0);
};
export const getTotalQuantity = (products) => {
  return products.reduce((sum, { quantity }) => sum + quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],             //each product is stored as object in array
  },
  reducers: {
    addToCart: (state, action) => {
      let newCart = [...state.products];
      let itemInCart = newCart.find((item) => item._id === action.payload._id);
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        itemInCart = {
          ...action.payload,
          quantity: action.payload.quantity,
        };
        state.products.push(itemInCart);
      }
    },
    removeFromCart: (state, action) => {              //here payload is id
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    setNewQuantity: (state, action) => {             //here payload is id and new quantity
      //takes quantity literal from product object(find by id) and updates quantity directly   
      state.products.find((item) => item._id === action.payload.id).quantity = action.payload.qty;
    },
  },
});

export const { addToCart, removeFromCart, setNewQuantity } = cartSlice.actions;
export default cartSlice.reducer;

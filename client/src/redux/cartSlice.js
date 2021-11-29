import { createSlice } from "@reduxjs/toolkit";
//to interact with mongo db
const cartSlice = createSlice({
  name: "cart",
  initialState: {
   currentUser:null,
   isFetching:false,
   error:false
  },
  reducers: {
  addToCartDbStart:(state) => {
    state.isFetching=true
  },
  addToCartDbSuccess:(state,action) => {
    state.isFetching=false;
    state.currentUser=action.payload
  },
  addToCartDbFailure:(state) => {
    state.isFetching=false;
    state.error=true;
  },
  updateCartDbStart:(state) => {
    state.isFetching=true
  },
  updateCartDbSuccess:(state,action) => {
    state.isFetching=false;
    state.currentUser=action.payload
  },
  updateCartDbFailure:(state) => {
    state.isFetching=false;
    state.error=true;
  },
  deleteCartDbStart:(state) => {
    state.isFetching=true
  },
  deleteCartDbSuccess:(state,action) => {
    state.isFetching=false;
    state.currentUser=action.payload
  },
  deleteCartDbFailure:(state,action) => {
    state.isFetching=false;
    state.error=action.payload;

    
  },
  
  },
});

export const { addToCartDbStart, addToCartDbSuccess, addToCartDbFailure,updateCartDbStart, updateCartDbSuccess, updateCartDbFailure,deleteCartDbStart, deleteCartDbSuccess, deleteCartDbFailure} = cartSlice.actions;
export default cartSlice.reducer;

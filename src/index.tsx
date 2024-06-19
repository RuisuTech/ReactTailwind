import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products";


const Store = configureStore({
   reducer: {
      products: productsReducer
   },
});


export default Store;
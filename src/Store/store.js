import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "../Redux/infoSlice";
import productSlice from "../Redux/productSlice";
import { productApi } from "../Services/Api/productService";

export const store = configureStore({
  reducer: {
    info: infoSlice,
    product: productSlice,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});

// import { configureStore } from "@reduxjs/toolkit";
// import infoSlice from "../Redux/infoSlice";
// import productSlice from "../Redux/productSlice";
// import { productApi } from "../Services/Api/productService";

// export const store = configureStore({
//   reducer: {
//     info: infoSlice, // Info slice reducer
//     product: productSlice, // Product slice reducer
//     [productApi.reducerPath]: productApi.reducer, // Correct use of productApi.reducer
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(productApi.middleware), // Correct use of middleware
// });

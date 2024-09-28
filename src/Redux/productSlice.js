import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productName: "Laptop",
  quantity: 20,
  company: "Apple",
  // Add more properties as needed for your application state. For example, you might have a "loading" property to track the state of the application, or a "data" property to store the fetched data.
};

export const productSlice = createSlice({
  name: "aaryan",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.productName = action.payload;
    },
    changeQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    changeCompany: (state, action) => {
      state.company = action.payload;
    },
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
  },
});

// Action creators are generated for each case reducer function

export const { changeName, changeQuantity, changeCompany } =
  productSlice.actions;
export default productSlice.reducer;

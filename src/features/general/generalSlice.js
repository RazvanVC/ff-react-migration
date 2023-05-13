import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [{
    id: 1,
    name: "Barrita de chocolate",
    price: 2,
    stock: 10,
    category: "Chocolates",
    description: "Barrita de chocolate de 100 gramos",
    imageRoute: "products/producto1.png",
  },
  {
    id: 2,
    name: "Chocolate con leche",
    price: 1.2,
    stock: 20,
    category: "Chocolates",
    description: "Tableta de chocolate con leche de 100 gramos",
    imageRoute: "products/producto2.png",
  },
  {
    id: 3,
    name: "Puerros",
    price: 1.5,
    stock: 70,
    category: "Verduras",
    description: "Bolsa de 5 puerros",
    imageRoute: "products/producto3.png",
  }],
  cart: [],
};

export const generalSlice = createSlice({
  name: 'generalState',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addToCart: (state) => {
      state.cart.push({ id: 1, quantity: 1 });
    }
  },
});

export const { addToCart, removeFromCart, emptyCart, addProduct, removeProduct } = generalSlice.actions;

export const selectCart = (state) => state.generalState.cart;
export const selectData = (state) => state.generalState.data;

export default generalSlice.reducer;

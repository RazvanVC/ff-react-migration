import React from "react";
import "./App.css";
import Header from "./features/components/Header";
import ProductsList from "./features/components/ProductsList";
import Cart from "./features/components/Cart";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={8}>
        {<ProductsList />}
      </Grid>
      <Grid item xs={4}>
        {<Cart />}
      </Grid>
    </Grid>
  );
}

export default App;

import React, { useContext, useEffect, useState } from "react";

import {
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  css,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import dataReducer from "../../reducers/dataReducer";

const ProductsList = () => {
  const hoverZoom = css({
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.5s",
    },
  });
  const data = useSelector((state) => state.data.data);

  function addToCart(productID) {
    console.log("productID", productID);
  }
    

  const categories = [...new Set(data.map((product) => product.category))];
  

  return (
    <>
      <h1>Products</h1>
        {categories.map((category) => (
          <Grid item xs={12} key={category}>
            <h2>{category}</h2>
            <Grid container spacing={2}>
              {data
                .filter((product) => product.category === category)
                .map((product) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Card sx={{ maxWidth: 345 }} className={hoverZoom}>
                      <CardHeader title={product.title} />
                      <CardMedia
                        component="img"
                        height="194"
                        image={product.image}
                        alt={product.title}
                      />
                      <CardContent>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                      </CardContent>
                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => addToCart(product.id)}
                        >
                          Add to cart
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
    </>
  );
};

export default ProductsList;

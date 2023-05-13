import React, { useEffect, useState } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  css,
} from "@mui/material";

import { useDataContext } from "./GlobalProvider";

const ProductCard = ({ productID, addToCart }) => {
  const hoverZoom = css({
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.5s",
    },
  });

  const [data, setData] = useDataContext();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(data.find((product) => product.id === productID));
  }, [data]);

  return (
    <>
      {product !== undefined ? (
        <Grid item xs={5}>
          <Card css={hoverZoom}>
            <CardHeader title={product.name} />
            <CardMedia
              component="img"
              height="194"
              image={product.imageRoute}
              alt={product.name}
            />
            <CardContent>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Stock: {product.quantity}</p>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={addToCart(product.id)}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ) : null}
    </>
  );
};

export default ProductCard;

import React from "react";

import { Grid, Button, Card, CardActions, CardContent, CardHeader, CardMedia, css } from "@mui/material";
import { useSelector } from "react-redux";

const Cart = () => {

    const cart = useSelector((state) => state.cart.cart);

    return (
        <div>
            <h1>Cart</h1>
            <Grid container spacing={2}>
                {cart.map((product) => (
                    <Grid item xs={12} key={product.title}>
                        <Card>
                            <CardHeader title={product.name} />
                            <CardContent>
                                <p>Price: {product.price}</p>
                                <p>Quantity: {product.quantity}</p>
                                <p>Total: {product.price * product.quantity}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <h2>Total: {cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}</h2>
                    <Button variant="contained" color="primary">
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cart;
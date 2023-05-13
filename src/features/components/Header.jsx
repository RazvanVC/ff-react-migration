import React from 'react';
import { Button, Grid } from '@mui/material';

const Header = () => {

    const [isAdmin, setIsAdmin] = React.useState(false);

    const handleAdmin = () => {
        setIsAdmin(!isAdmin);
    }

    const addProduct = () => {
        
    }

    const addCategory = () => {
    }

    return (
        <Grid container >
            <Grid item xs={8} >
                <img src='logo.png' width={100} height={100}></img>
            </Grid>
            <Grid item xs={4} >
                {isAdmin ? <Button onClick={handleAdmin}>To User</Button> : <Button onClick={handleAdmin}>To Admin</Button>}
                {isAdmin ? <Button onClick={addProduct}>Add Product</Button> : <></>}
                {isAdmin ? <Button onClick={addCategory}>Add Category</Button> : <></>}
            </Grid>
        </Grid>
    )
}

export default Header;
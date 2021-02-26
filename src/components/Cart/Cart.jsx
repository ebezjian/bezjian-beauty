import React from 'react'
import {Container, Typography, Button, Grid } from '@material-ui/core';

const Cart = () => {
  const isEmpty = true;
  const EmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart, get to browsing!</Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        
      </Grid>
    </>
  );
  return (
    <Container>
      <div className={classes.toolbar}/>
      <Typography className={classes.title} variant='h3'>Your Shopping Cart</Typography>
      {isEmpty? <EmptyCart/>: <FilledCart />}
    </Container>
  )
}

export default Cart

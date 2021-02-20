import React from 'react';
import Grid from '@material-ui/core';
//props
const products = [
  { id: 1, name: 'Lipstick', color: 'red', price: '$5'},
  { id: 2, name: 'Blush', color: 'coral', price: '$10'},
  

]

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product}/>
        </Grid>
      ))}
    </Grid>
  </main>
}

export default Products;
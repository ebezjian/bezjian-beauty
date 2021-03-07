import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import {Link} from 'react-router-dom';


const Product = ({product, onAddToCart}) => {
  const classes = useStyles();
  const viewStyle = {
    left: 0,
    top: '-30px',
    opacity: 0,
    width: '100%',
    display: 'flex',
    color: 'red',
    fontSize: '30px',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    transition: 'opacity 0.3s ease-in', 
  };

  return (
    <Card className={classes.root}>
      <Link to={'product-view/${product.id}'} className={classes.link}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name}/>

      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>     
        </div>
      </CardContent>
      </Link>
      <CardActions disableSpacing className={classes.cardActions}>


          <Typography variant="h5">
            ${product.price.formatted}
          </Typography>        
        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id,1)}>
          <AddShoppingCart/>
        </IconButton>
      </CardActions>

    </Card>
  )
}

export default Product

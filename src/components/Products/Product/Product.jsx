import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import "./styles.css";

const Product = ({product, onAddToCart}) => {
  const classes = useStyles();

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
        {/* <Typography dangerouslySetInnerHTML={{__html: product.description}}variant = "body2" color="textSecondary"/> */}
        <Typography className="view" variant="h3">View</Typography>
        
      
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

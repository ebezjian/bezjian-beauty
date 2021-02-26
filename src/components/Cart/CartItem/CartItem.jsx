import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';
import usestyles from './styles';



const CartItem = ({item}) => {
  const classes = usestyles();
  return (
    <Card>
      <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
    </Card>
  )
}

export default CartItem

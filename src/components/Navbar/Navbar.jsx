import React from 'react';
import{ AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart} from '@material-ui/icons';
import StorefrontIcon from '@material-ui/icons/Storefront';
import {Link} from 'react-router-dom';
import logo from '../../assets/Bezjian.png';
import useStyles from './styles';

const Navbar = ({totalItems}) => {
  const classes = useStyles ();
  

 
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Bezjian Beauty Logo" height="25px" className={classes.image}/>
            Bezjian Beauty
          </Typography>
          {/* takes up as much space as needed with .grow */}
          <div className={classes.grow}/>
          
          <div className={classes.button}>

            <IconButton component={Link} to="/products" aria-label="Go Shopping" color="inherit">
              
                <StorefrontIcon/>
              
            </IconButton>
            
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>

          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar

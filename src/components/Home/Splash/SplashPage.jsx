import React from 'react';
import useStyles from './styles';
import {Paper, Button, Grid }from '@material-ui/core';
import SpecialButton from '../SpecialButton/SpecialButton';
// import Grid from '@material-ui/core/Grid';
import logo from '../../../assets/Duo.jpg';


export default function Splash() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.bannerGrid}>
        <Grid container spacing={3}>          
          {/* <Grid item xs={6}>
            <Paper className={classes.paper}><img src={logo} alt="Bezjian-beauty"/></Paper>
            
          </Grid> */}
          <Grid item xs={6}>
            <Paper className={classes.paper2}> 
              <SpecialButton/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
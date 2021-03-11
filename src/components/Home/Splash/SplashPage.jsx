import React from 'react';
import useStyles from './styles';
import {Paper,  Grid }from '@material-ui/core';
import SpecialButton from '../SpecialButton/SpecialButton';



export default function Splash() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.bannerGrid}>
        <Grid container spacing={3}>          
          <Grid item xs={6}>
            <Paper className={classes.paper2}> 
              <SpecialButton/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

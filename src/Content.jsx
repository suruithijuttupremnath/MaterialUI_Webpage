import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Checkbox } from '@material-ui/core';
import CustomizedCheckbox from "./checkbox.js";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    
    color: theme.palette.text.secondary,
    backgroundColor: '#b3f0ff',
    position : "relative",
  
    
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
      
    <div className='gridboxes'>
      <Grid container spacing={6}>
        
          
          <div className="button">
          <Grid container justify = 'center'>

          {/* button */}
          <Button variant="contained"  color="primary" >
            search
          </Button>
          </Grid>
          </div>
          <div>
          <Grid item xs={12} sm={8}>
            <CustomizedCheckbox />
          </Grid>
          </div> 
         
         
          {/* Grid */}
       <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>Free delivery in 24h service & deals</Paper>
       </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Laundry Service</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Dry cleaning</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Home & Bedding</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

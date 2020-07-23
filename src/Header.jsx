import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import "./styles.css";
const useStyles = makeStyles((theme) => ({
  root: {
    
    padding: '2px 4px',
    display: 'flex',
    
   
    width: 800,
    
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    
  },
  iconButton: {
    padding: 5,
    marginLeft:5,
    marginRight:5,
  },
  divider: {
    height: 28,
    margin: 4,
  },
 

  
}));

// Searchbar
export default function CustomizedInputBase() {
  const classes = useStyles();
        

  return (
    <Paper component="form" className={classes.root}  >
       
        
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Entry Post Code"
        inputProps={{ 'aria-label': 'search google maps' }}
      />  
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <CancelIcon />
      </IconButton> 
      <div>
      
      </div>
        
     
    </Paper>
    
  );
}

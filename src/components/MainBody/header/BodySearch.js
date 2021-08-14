import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import {FiSearch} from 'react-icons/fi';

const useStyles = makeStyles(() => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 100,
    height: 20,
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const BodySearch =() => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} style={{background: '#23272a'}}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        style = {{ fontSize: '10px', color: 'white'}}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <FiSearch size={15} style={{color: 'whitesmoke'}}/>
      </IconButton>
    </Paper>
  );
}

export default BodySearch;
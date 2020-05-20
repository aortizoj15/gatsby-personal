import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 260,
    backgroundColor: '#424242',
    margin: '1rem 1rem 0 0',
  },
  title: {
    margin: '1rem 0 0',
    textAlign: 'center',
  },
  itemText: {
    textAlign: 'center',
  },
  listItem: {
    margin: '0 auto',
  }
}));


function SimpleList(props) {
  const classes = useStyles();
  const listToRender = props.items.map((val, i) => {
    return (
      <ListItem className={classes.listItem} key={i}>
        <ListItemText className={classes.itemText} primary={val} />
      </ListItem>
    )
  })
  return (
    <div className={classes.root}>
      <h3 className={classes.title}>{props.title}</h3>
      <List component="nav">
        {listToRender}        
      </List>
    </div>
  );
}

export default SimpleList;

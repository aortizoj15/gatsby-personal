import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '1rem 0 2rem',
  },
}));

function AlertDisplay() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert variant="filled" severity="info">
        <strong>Need an experienced developer for your team? Hire me! </strong>{' '}
        <a
          href="https://docs.google.com/document/d/19Kjd7Sc2ZaMb9Sk4q2K7_zuZ78vtgmS63pa9xdRu4bA/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Resume</strong>
        </a>{' '}
        <Link to="/contact">
          <strong>Contact Information</strong>
        </Link>
      </Alert>
    </div>
  );
}

export default AlertDisplay;

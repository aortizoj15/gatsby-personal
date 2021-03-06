import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Img } from 'gatsby';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 5,
    backgroundColor: '#424242',
    color: '#ffffff',
    margin: '0 0 1rem 1rem',
  },
  media: {
    height: 160,
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: '#303030',
  },
});
function ProjectCard({ imgUrl, title, paragraph, demoUrl, codeUrl }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title={title}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {paragraph}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.button} size="small" color="primary">
          <a className={classes.link} href={demoUrl}>
            View Demo
          </a>
        </Button>
        <Button className={classes.button} size="small" color="primary">
          <a className={classes.link} href={codeUrl}>
            View Code
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './PlantCardStyles';


export default function PlantCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>s
        <CardMedia
          className={classes.media}
          image="http://miriadna.com/desctopwalls/images/max/The-sprout.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Common Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Scientific Name
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Delete
        </Button>
        <Button size="small" color="primary">
          More Details
        </Button>
      </CardActions>
    </Card>
  );
}
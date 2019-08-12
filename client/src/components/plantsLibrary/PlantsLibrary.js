import React from 'react';
//import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './PlantsLibraryStyles'
import Container from '@material-ui/core/Container';
//import Link from '@material-ui/core/Link';
import PlantCard from '../../components/plantCard/PlantCard';
import { connect } from 'react-redux';

function PlantsLibrary(props) {
  // hardcode cards until setup CRUD API on backend
  // const cards = props.plants;
  const cards = [1,2,3,4,5,6,7]
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              My Garden
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              These are the current plants in your garden.
            </Typography>
            
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <PlantCard />

                {/* <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card> */}

              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          You are the Guru of Your Garden
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Happy Planting!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    plants: state.userData.plantsLibrary
  }
}

export default connect(mapStateToProps)(PlantsLibrary)
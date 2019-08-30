import React, { useEffect } from 'react';
//import AppBar from '@material-ui/core/AppBar';
//import Button from '@material-ui/core/Button';
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
import { loadUserData } from '../../actions/plantStats';

function PlantsLibrary(props) {
let {loadUserData} = props
  useEffect(() => {
    loadUserData()
  }, [loadUserData])

  // hardcode cards until setup CRUD API on backend
  // const cards = props.plants;
  const plants = props.plants;
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Welcome, {props.nickname}!
            </Typography>
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
            {plants.map((plant, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <PlantCard plant={plant} {...props} />

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

// somehow plants is updating after clicks "add plant to library", but then it is reset to what it was before
// shows updated state SOMETIMES.. see updated library without refreshing ?

const mapStateToProps = (state) => {
  return {
    plants: state.userData.plantsLibrary,
    nickname: state.userData.nickname
  }
}

export default connect(mapStateToProps, { loadUserData })(PlantsLibrary)
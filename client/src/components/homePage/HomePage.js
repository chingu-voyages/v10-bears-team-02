import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './HomePageStyles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';

const backgroundImage =
    'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'

function Layout(props) {
  const { backgroundClassName, children } = props;
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {children}
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} />
      </Container>
    </section>
  );
}


function HomePage(props) {
  const classes = useStyles();

  function handleSignUp() {
    props.history.push("/signup")
  }

  return (
      <div>
    <Layout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Welcome to Your Plant Growing Guide
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Search for detailed information about plants and build a digital garden
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        BECOME THE GURU OF YOUR GARDEN
      </Typography>
    </Layout>
    </div>
  );
}


export default HomePage;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import SearchBar from '../searchBar/SearchBar';
import  {submitLogOut} from '../../actions/logout'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function NavBar(props) {
  const classes = useStyles();
  console.log(props)

  function handleLogin() {
    props.history.push("/login")
  }

  
  function handleLogOut(e) { 
    console.log(e)
      //e.preventDefault()
      props.submitLogOut()
    
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Garden Guru 
          </Typography>  

          {props.auth && <Button color="inherit" onClick={handleLogOut}>Log Out</Button>}

          <Button
            color="inherit"
            onClick={handleLogin}
          >Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.userData.authenticated
  }
}

export default connect(mapStateToProps, {submitLogOut})(NavBar)
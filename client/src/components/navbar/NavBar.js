import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import useStyles from './NavBarStyles'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import SearchBar from '../searchBar/SearchBar';
import  {submitLogOut} from '../../actions/logout'




function NavBar(props) {
  const classes = useStyles();

  function handleLogin() {
    props.history.push("/login")
  }

  function handleLogOut(e) { 
    console.log(e)
      //e.preventDefault()
      props.submitLogOut()
    
  }

  function redirectHome() {
    props.history.push('/')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={redirectHome}>
            <Typography variant="h6" className={classes.title}>
              Garden Guru 
            </Typography>  
          </IconButton>
          
          <SearchBar {...props} className={classes.title}/>
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
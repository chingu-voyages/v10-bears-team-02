import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import useStyles from './NavBarStyles'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import SearchBar from '../searchBar/SearchBar';
import { submitLogOut } from '../../actions/logout'
import { verifyAuth } from '../../actions/verifyAuth'

function NavBar(props) {
  const classes = useStyles();

  const checkAuth = () => {    
    props.verifyAuth()
  }

  useEffect(checkAuth)

  function handleLogin() {
    props.history.push("/login")
  }

  function handleLogOut(e) { 
      props.submitLogOut()
      redirectHome()
  }

  function redirectHome() {
    props.history.push('/')
  }

  function redirectGarden() {
    props.history.push('/mygarden')
  }

  function UserActions(props) {
    const loggedIn = props.auth
    if (loggedIn) {
      return (
        <div>            
          <Button color="inherit" onClick={redirectGarden}>My Garden</Button>
          <Button
            color="inherit"
            onClick={handleLogOut}
          >Log Out</Button>
        </div>
      )      
    }
    return (
      <div>            
        <Button
          color="inherit"
          onClick={handleLogin}
        >Login</Button>
      </div>
    )

  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Button edge="start" color="inherit" aria-label="Title" onClick={redirectHome}>
            <Typography className={classes.grow} noWrap>
              Garden Guru 
            </Typography>  
          </Button>
          <div className={classes.grow} />

         

          <SearchBar {...props} className={classes.grow} />
          <div className={classes.grow} />
          <UserActions {...props}/>
         
          
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

export default connect(mapStateToProps, {submitLogOut, verifyAuth})(NavBar)
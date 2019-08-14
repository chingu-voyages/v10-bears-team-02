import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import useStyles from './NavBarStyles'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
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
      //e.preventDefault()
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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={redirectHome}>
            <Typography variant="h6" className={classes.title}>
              Garden Guru 
            </Typography>  
          </IconButton>
          <div className={classes.root} />

         

          <SearchBar {...props} className={classes.title} />
          <div className={classes.root} />
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
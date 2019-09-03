import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import useStyles from './NavBarStyles'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import SearchBar from '../searchBar/SearchBar';
import { submitLogOut } from '../../actions/logout'


function NavBar(props) {
  const classes = useStyles();
  
  const {submitLogOut} = props  

  function UserActions(props) {
    const loggedIn = props.auth
    console.log(props)
    if (loggedIn) {
      return (
        <div>            
          <NavLink color="inherit" to='/mygarden'>My Garden</NavLink>
          <NavLink
            color="inherit"
            to='/'
            onClick={submitLogOut}
          >Log Out</NavLink>
        </div>
      )      
    }
    return (
      <div>            
        <NavLink
          color="inherit"
          to='/login'
        >Login</NavLink>
      </div>
    )

  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <NavLink edge="start" color="inherit" aria-label="Title" to='/'>
            <Typography className={classes.grow} noWrap>
              Garden Guru 
            </Typography>  
          </NavLink>
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

export default connect(mapStateToProps, {submitLogOut })(NavBar)
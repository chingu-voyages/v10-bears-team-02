import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import useStyles from './NavBarStyles'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import SearchBar from '../searchBar/SearchBar';
import { submitLogOut } from '../../actions/logout'
import Button from '@material-ui/core/Button';


function NavBar(props) {
  const classes = useStyles();
  
  const {submitLogOut} = props  

  function UserActions(props) {
    const loggedIn = props.auth
    console.log(props)
    if (loggedIn) {
      return (
        <div>            
          <Button className={classes.button} to='/mygarden' color="inherit" component={NavLink}>My Garden</Button>        
          <Button
            color="inherit"
            component={NavLink}
            to='/'
            onClick={submitLogOut}
          >Log Out</Button>
        </div>
      )      
    }
    return (
      <div>  
        <Button className={classes.button} color="inherit" to='/login' component={NavLink}>Login</Button>                 
      </div>
    )
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Button edge="start" color="inherit" aria-label="Title" to='/' component={NavLink}>
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

export default connect(mapStateToProps, {submitLogOut })(NavBar)
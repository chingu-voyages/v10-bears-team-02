import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';
import Button from './node_modules/@material-ui/core/Button';
import IconButton from './node_modules/@material-ui/core/IconButton';
import MenuIcon from './node_modules/@material-ui/icons/Menu';

import axios from './node_modules/axios';

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

const handleLogin = () => {
    axios.get('/api/test')
    .then((resp) => {
        console.log(resp)
    })
}

export default function NavBar() {
  const classes = useStyles();

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
          <Button 
            color="inherit"
            onClick={handleLogin}
          >Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
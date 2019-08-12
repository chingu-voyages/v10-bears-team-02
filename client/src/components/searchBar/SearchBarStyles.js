import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {        
    alignItems: 'center',
    verticalAlign: 'middle',              
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchForm: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    marginRight: theme.spacing(3),    
  },
  searchButton: {
    margin: 15
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
    
      
}));

export default useStyles
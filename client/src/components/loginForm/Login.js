import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './LoginStyles';
import Container from '@material-ui/core/Container';

export default function SignIn(props) {
    const classes = useStyles();    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function handleSumbit(e) { 
        e.preventDefault()      
        console.log(email, password)
        //props.submitLogin({email, password})        
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form className={classes.form} onSubmit={handleSumbit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    autoComplete="current-password"
                />            
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                Sign In
                </Button>
                <Grid container>            
                <Grid item>
                    <Link href="/signup" variant="body2">
                    {"Don't have an account? Login"}
                    </Link>
                </Grid>
                </Grid>
            </form>
            </div>

        </Container>
    );
}
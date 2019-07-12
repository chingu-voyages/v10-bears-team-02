import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function InputField() {
    const classes = useStyles();

    const handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    <form className={classes.container} noValidate autoComplete="off">
        <TextField
            id="standard-with-placeholder"
            label="With placeholder"
            placeholder="Placeholder"
            className={classes.textField}
            margin="normal"
            onChange={handleInputChange()}
        />
    </form>

}
import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './InputFieldStyles'
import PropTypes from 'prop-types';

function InputField(props) {
    const classes = useStyles();
    console.log(props)

    const [values, setValues] = React.useState({
        [props.name]: ''
      });

    return (
            <TextField
                id={props.name}
                label={props.label}
                placeholder={props.placeholder}
                name={props.name}
                className={classes.textField}
                margin="normal"
                onChange={(event) => {
                    setValues({ [event.target.name]: event.target.value })
                    }
                }
            />
    )
}

InputField.propTypes = {
    name: PropTypes.string.isRequired
}

export default InputField
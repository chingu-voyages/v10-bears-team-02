import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './InputFieldStyles'
import PropTypes from 'prop-types';

function InputField(props) {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        [props.name]: ''
      });

      console.log(values)
    
    //   const handleInputChange = name => event => {
    //       console.log(event.target.value)
    //     //   debugger
    //     setValues({ ...values, [name]: event.target.value });
    //     console.log()
    //   };

    return (

        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="standard-with-placeholder"
                label="With placeholder"
                placeholder="Placeholder"
                name={props.name}
                className={classes.textField}
                margin="normal"
                onChange={(event) => {
                    setValues({ [event.target.name]: event.target.value })
                    }
                }
            />
        </form>
    )
}

InputField.propTypes = {
    name: PropTypes.string.isRequired
}

export default InputField
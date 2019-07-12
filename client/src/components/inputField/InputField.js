import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './InputFieldStyles'

export default function InputField() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        query: ''
      });
    
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
                className={classes.textField}
                margin="normal"
                onChange={(event) => {
                    setValues(event.target.value)
                    console.log(values)
                    }
                }
            />
        </form>
    )
}
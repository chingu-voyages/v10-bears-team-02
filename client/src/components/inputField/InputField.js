import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './InputFieldStyles'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
                    props.updateQueryInput(event.target.value)
                    }
                }
            />
    )
}

InputField.propTypes = {
    name: PropTypes.string.isRequired
}

const mapDispatchToProps = (state) => ({
    updateQueryInput: state.updateQueryInput
})



export default connect(null, mapDispatchToProps)(InputField)
import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './InputFieldStyles'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateQueryInput } from '../../actions/formData';

function InputField(props) {
    const classes = useStyles();

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

export default connect(null, {updateQueryInput})(InputField)
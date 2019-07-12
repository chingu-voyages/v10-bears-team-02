import React from 'react'
import InputField from '../inputField/InputField'
import useStyles from './SearchBarStyles'

function SearchBar() {
    const classes = useStyles();
    return (
        <form className={classes.container}>
            <InputField name='query' label='Search for a plant'/>
        </form>
    )
}

export default SearchBar
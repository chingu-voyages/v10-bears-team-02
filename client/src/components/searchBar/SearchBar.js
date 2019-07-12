import React from 'react'
import InputField from '../inputField/InputField'
import useStyles from './SearchBarStyles'

function SearchBar() {

    const classes = useStyles();

    const handleSearchSubmit = (event) => {
        event.preventDefault()
        console.log(event.type)
    }
    return (
        <form className={classes.container} onSubmit={(event) => handleSearchSubmit(event)}>
            <InputField name='query' label='Search for a plant'/>
            <button>Search</button>
        </form>
    )
}

export default SearchBar
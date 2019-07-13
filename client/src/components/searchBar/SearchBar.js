import React from 'react'
import InputField from '../inputField/InputField'
import useStyles from './SearchBarStyles'
import { submitQuery } from '../../actions/formData'
import { connect } from 'react-redux'

function SearchBar(props) {

    const classes = useStyles();

    // const handleSearchSubmit = (event) => {
    //     event.preventDefault()
    //     console.log(event.type)
    // }

    return (
        <form className={classes.container} onSubmit={(event) => props.submitQuery(event.target.value)}>
            <InputField name='query' label='Search for a plant'/>
            <button>Search</button>
        </form>
    )
}

export default connect(null, { submitQuery })(SearchBar)
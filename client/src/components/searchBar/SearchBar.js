import React from 'react'
import InputField from '../inputField/InputField'
import Button from '@material-ui/core/Button'
import useStyles from './SearchBarStyles'
import { submitQuery } from '../../actions/searchResults'
import { connect } from 'react-redux'

function SearchBar(props) {

    const classes = useStyles();

    return (
        <form className={classes.container} onSubmit={(event) => {
                event.preventDefault()
                props.submitQuery(props.query)
            }
        }>
            <InputField name='query' label='Search for a plant'/>
            <Button color='primary'>Search</Button>
        </form>
    )
}

function mapStateToProps(state) {    
    return {
        query: state.formData.searchBar.query
    }
}

export default connect(mapStateToProps, { submitQuery })(SearchBar)
import React from 'react'
import InputField from '../inputField/InputField'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SearchBarStyles'
import { submitQuery } from '../../actions/searchResults'
import { connect } from 'react-redux'

function SearchBar(props) {

    const classes = useStyles();

    return ( 

        <form className={classes.search} onSubmit={(event) => {
            event.preventDefault()
            console.log(props)
                props.submitQuery(props.query)
                props.history.push("/searchresults")
            }
        }>         
      
            <InputField className={classes.search} color='white' name='query' placeholder='Search for a plant'/>       
            <Button className={classes.searchButton} color='default' variant='outlined' type='submit'>             
                <SearchIcon /> 
            </Button>
        </form>
    )

}

function mapStateToProps(state) {    
    return {
        query: state.formData.searchBar.query
    }
}

export default connect(mapStateToProps, { submitQuery })(SearchBar)
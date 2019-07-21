import React from 'react'
import InputField from '../inputField/InputField'
import Button from '@material-ui/core/Button'
import useStyles from './SearchBarStyles'
import { submitQuery } from '../../actions/searchResults'
import { connect } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase'

function SearchBar(props) {

    const classes = useStyles();

    return (

        <form className={classes.search} onSubmit={(event) => {
                event.preventDefault()
                props.submitQuery(props.query)
            }
        }>         
         <div>
             <InputField color='white' name='query' label='Search for a plant'/>
        </div>
        <Button color='primary' variant='outlined'>             
            <SearchIcon /> 
        </Button>
        </form>
    )

    // return (
    //     <form className={classes.search}
    //         onSubmit={(event) => {
    //             event.preventDefault()
    //             props.submitQuery(props.query)
    //         }}
    //     >
            // <div className={classes.searchIcon}>
            //     <SearchIcon />
            // </div>
    //         <InputBase
    //         placeholder="Search for a plant"
    //         classes={{
    //             root: classes.inputRoot,
    //             input: classes.inputInput,
    //         }}
    //         inputProps={{ 'aria-label': 'Search for a plant' }}
    //         />
    //         <Button color='primary'>Search</Button>
    //   </form>
    // )
}

function mapStateToProps(state) {    
    return {
        query: state.formData.searchBar.query
    }
}

export default connect(mapStateToProps, { submitQuery })(SearchBar)
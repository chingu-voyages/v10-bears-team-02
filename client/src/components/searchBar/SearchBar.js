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

    // return (
    //     <form className={classes.search} onSubmit={(event) => {
    //             event.preventDefault()
    //             props.submitQuery(props.query)
    //         }
    //     }>
    //         <InputField name='query' label='Search for a plant'/>
    //         <Button color='primary'>Search</Button>
    //     </form>
    // )

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
            placeholder="Search for Plants"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'Search for Plants' }}
            />
      </div>
    )
}

function mapStateToProps(state) {    
    return {
        query: state.formData.searchBar.query
    }
}

export default connect(mapStateToProps, { submitQuery })(SearchBar)
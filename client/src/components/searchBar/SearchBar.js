import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SearchBarStyles'
import { submitQuery } from '../../actions/searchResults'
import { connect } from 'react-redux'

function SearchBar(props) {

    const classes = useStyles();
    const [values, setValues] = React.useState({
        query:''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });

    };
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        props.submitQuery(values.query)
        props.history.push("/searchresults")
    }
    return ( 

        // <form className={classes.search} onSubmit={(event) => {
        //         event.preventDefault()         
        //         props.submitQuery(props.query)
        //         props.history.push("/searchresults")
        //     }
        // }>         
      
        //     <InputField classes={{
        //        root: classes.inputRoot,
        //         input: classes.inputInput
        //     }} color='white' name='query' placeholder='Search for a plant'/>       
        //     <Button className={classes.searchButton} color='default' variant='outlined' type='submit'>             
        //         <SearchIcon /> 
        //     </Button>
        // </form>


        <form className={classes.search} onSubmit={handleSubmit}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
            placeholder="Search…"
            inputComponent='input'
            onChange={handleChange('query')}
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
            />
            
        </form>
        
    )

}

function mapStateToProps(state) {    
    return {
        query: state.formData.searchBar.query
    }
}

export default connect(mapStateToProps, { submitQuery })(SearchBar)
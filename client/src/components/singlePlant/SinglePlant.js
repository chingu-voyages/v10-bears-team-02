import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import useStyles from './SinglePlantStyles'


function SinglePlant(props) {
    const classes = useStyles()

    useEffect((event) => { 
        
    }, [props.match.params.id])


    return (
        <div className={classes.root}>
            plant id:
            {props.match.params.id}
      </div>
    )
}

function mapStateToProps(state) {
    return {
        plants: state.searchResults
    }
}

export default connect(mapStateToProps)(SinglePlant)
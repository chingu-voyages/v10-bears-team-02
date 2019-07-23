import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import useStyles from './SinglePlantStyles'
import { fetchPlantStats } from '../../actions/plantStats'


function SinglePlant(props) {
    const classes = useStyles()

    useEffect(() => {  
    
            fetchPlantStats(props.match.params.id)
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

export default connect(mapStateToProps, {fetchPlantStats})(SinglePlant)
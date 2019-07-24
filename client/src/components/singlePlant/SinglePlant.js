import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import useStyles from './SinglePlantStyles'
import  { fetchPlantStats }   from '../../actions/plantStats'



function RenderPlant(props){
    console.log(props.data)
    return (
        <div>
            Test
        </div>
    )
}



function SinglePlant(props) {
    const classes = useStyles()

    useEffect(() => {  
    
            props.fetchPlantStats(props.match.params.id)
    }, [props])




    return (
        <div className={classes.root}>
           <RenderPlant />
           
      </div>
    )
}

function mapStateToProps(state) {
    return {
        plant: state.searchResults
    }
}

export default connect(mapStateToProps, {fetchPlantStats})(SinglePlant)
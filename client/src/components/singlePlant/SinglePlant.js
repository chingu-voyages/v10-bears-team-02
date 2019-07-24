import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import useStyles from './SinglePlantStyles'
import  { fetchPlantStats }   from '../../actions/plantStats'



function RenderPlant(props){
    console.log(props.plant)
    return (
        <div>
           
        </div>
    )
}



function SinglePlant(props) {
    const classes = useStyles()
    const { fetchPlantStats } = props
    const { id } = props.match.params
    console.log(props)
    useEffect(() => {  
    
            fetchPlantStats(id)
    }, [id, fetchPlantStats])


    return (
        <div className={classes.root}>
            <RenderPlant plant={props.plant} />
      </div>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        plant: state.currentPlant
    }
}

export default connect(mapStateToProps, {fetchPlantStats})(SinglePlant)
const axios = require('axios')

//Action Creator

/**
 * 
 */
const querySinglePlant = () => { 
    return {
        
        type: 'QUERY_SINGLE_PLANT'
    }
}

/** 
 * @param {String} data  plant id
 */
const getPlantStats = (data) => {
    return {
        type: 'GET_PLANT_STATS',
        data
    }
}



//Action

export const fetchPlantStats = (id) => {
   // console.log({id:id})
    return (dispatch) => {    
        //console.log('after return')
       dispatch(querySinglePlant())   
    
        return axios.post('/api/plant', {id: id})        
            .then(response => {               
                dispatch(getPlantStats(response.data)) 
            }
        )
    }

}

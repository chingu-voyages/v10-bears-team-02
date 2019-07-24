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
const getPlantStats = (payload) => {
    return {
        type: 'GET_PLANT_STATS',
        payload
    }
}



//Action

export const fetchPlantStats = (id) => {
    
    return (dispatch) => {    
        
       dispatch(querySinglePlant())   
    
        return axios.post('/api/plant', {id: id})        
            .then(response => {     
              
                dispatch(getPlantStats(response.data)) 
            }
        )
    }

}

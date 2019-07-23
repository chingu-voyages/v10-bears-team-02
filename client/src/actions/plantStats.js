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
    console.log({id:id})
    return (dispatch) => {    
        console.log('after return')
       dispatch(querySinglePlant())   
    
        return axios.post('/api/plant', {id: id})        
            .then(response => {     
                console.log(response)
                dispatch(getPlantStats(response.data)) 
            }
        )
    }

}

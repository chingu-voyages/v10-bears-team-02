const axios = require('axios');

// ACTION CREATORS - functions that go to the reducer


const queryPlantsAPI = () => {     
    return {
        type: 'SUBMIT_QUERY'
    }
}

const setPlants = (payload) => {
    return {
        type: 'GET_PLANTS_SUCCESS', 
        payload
    }
}

// ASYNCHRONOUS ACTIONS - make calls to the API
export const submitQuery = (query) => {
    return (dispatch) => {    
        dispatch(queryPlantsAPI())   
        return axios.post('/api/query', {query: query})        
                .then(data => {
                     dispatch(setPlants(data))
                    //console.log({ data: data })
                }
        )
    }
}
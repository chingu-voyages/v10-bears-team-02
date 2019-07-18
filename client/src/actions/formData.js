// ACTION CREATORS - functions that go to the reducer
const axios = require('axios');

export const updateQueryInput = (data) => {
    return {
        type: 'UPDATE_QUERY_INPUT',
        data
    }
}

const queryAPI = () => {     
    return {
        type: 'SUBMIT_QUERY'
    }
}



// ASYNCHRONOUS ACTIONS - make calls to the API

export const submitQuery = (query) => {
    return (dispatch) => {    
        dispatch(queryAPI())   
        return axios.post('/api/query', {query: query})        
                .then(data => {
                        
                    console.log({ data: data })
                }
        )
    }
}
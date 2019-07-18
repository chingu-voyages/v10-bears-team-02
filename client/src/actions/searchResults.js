const axios = require('axios');

// ACTION CREATORS - functions that go to the reducer
const queryAPI = () => {
    return {
        type: 'SUBMIT_QUERY'
    }
}


// ASYNCHRONOUS ACTIONS - make calls to the API

export const submitQuery = (query) => {
    debugger
    return dispatch => {
        dispatch(queryAPI())
        console.log(query)
        
        // axios.get('/api/query')
        // .then((data) => {
        //     console.log(data)
        // })
        // return fetch(`/api/query`), {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: {
        //         query: query
        //     }
        // }
        // .then(response => response.json())
        // .then(data => console.log(data))
    }
}
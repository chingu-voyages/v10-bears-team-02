// ACTION CREATORS - functions that go to the reducer

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
    debugger
    return dispatch => {
        dispatch(queryAPI())
        return fetch(`/api/query`), {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                query: query
            }
        }
        .then(response => response.json())
        .then(data => console.log(data))
    }
}
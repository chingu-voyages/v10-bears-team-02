// ACTION CREATORS - functions that go to the reducer

export const updateQueryInput = (data) => {
    return {
        type: 'UPDATE_QUERY_INPUT',
        data
    }
}

// ASYNCHRONOUS ACTIONS - make calls to the API

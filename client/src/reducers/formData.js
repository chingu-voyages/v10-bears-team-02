const initialState = {
    searchBar: {
        query: '',
    },
    login: {
        email: '',
        password: ''
    },
    register: {
        email: '',
        username: '',
        password: '',
        verifyPassword: ''
    }
}

export default (state = initialState, action) => {   
    switch (action.type) {
       
        case 'UPDATE_QUERY_INPUT':
            return {
                ...state,
                searchBar: {
                    query: action.data
                }
            }   
        
        case "SUBMIT_QUERY":
            return {
                ...state
            }

        default:
            return state;
    }
}
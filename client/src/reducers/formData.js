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
        verify_password: ''
    }
}

export default (state = initialState, action) => {

    switch(action.type) {
        case 'UPDATE_QUERY_INPUT':
            return {
                ...state,
                searchBar: {
                    query: action.payload
                }
            }

            default:
                return state;
    }
}
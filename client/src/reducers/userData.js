const initialState = {
    email: '',
    username: '',
    plantsLibrary: [],
    currentPlant: {
        name: '',
        perennial: null
    },
    authenticated: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'COOKIE_STATUS':
            return {
                ...state, 
                authenticated: action.payload
            }

        default:
            return state
    }
}
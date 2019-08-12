const initialState = {
    email: '',
    nickname: '',
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
        
        case 'LOG_OUT' :
            return {
                initialState, // be sure default state has authenticated = false                 
            }

        default:
            return state
    }
}
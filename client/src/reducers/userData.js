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

        case 'LOGIN_SUCCESS':
            return action.payload
        
        case 'LOG_OUT' :
            return {
                initialState, // be sure default state has authenticated = false                 
            }

        case 'ADD_PLANT_SUCCESS':
            debugger
            return {
                ...state,
                plantsLibrary: [...state.plantsLibrary, action.payload]
            }

        case 'USER_DATA_SUCCESS':
            return action.payload

        default:
            return state
    }
}
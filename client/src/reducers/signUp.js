const initialState = ''

export default (state = initialState, action) => {

    switch (action.type) {                           
        
        case 'SUBMIT_SIGNUP_CREDS':
            return state 
        
        case 'SIGNUP_ERROR':
            return action.payload
        
        case 'SIGNUP_SUCCESS':
            return action.payload

            default:
                return state;
    }
}
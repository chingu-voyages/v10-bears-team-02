const initialState = ''


//need to add to store.
export default (state = initialState, action) => {

    switch (action.type) {                           
        
        case 'SUBMIT_LOGIN_CREDS':
            return state 
        
        case 'LOGIN_SUCCESS':
            return state
        
        case 'LOGIN_FAIL':
            return action.payload

            default:
                return state;
    }
}
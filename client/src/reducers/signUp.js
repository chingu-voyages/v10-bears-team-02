const initialState = {}

export default (state = initialState, action) => {

    switch (action.type) {                           
        
        case 'SUBMIT_SIGNUP_CREDS':
            return state 
        
        case 'SIGNUP_SUCCESS':
            return state

            default:
                return state;
    }
}
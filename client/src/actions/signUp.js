const axios = require('axios')

//Action Creator

const submitSignUpCredentials = () => { 
    return {        
        type: 'SUBMIT_SIGNUP_CREDS'
    }
}

const signUpSuccess = (payload) => {
    return {
        type: 'SIGNUP_SUCCESS', 
        payload
    }
}

const singUpError = (payload) => {
    return {
        type: "SIGNUP_ERROR", 
        payload
    }
}

//Action
export const submitSignUp = (userCreds) => {    
    return (dispatch) => {            
       dispatch(submitSignUpCredentials())       
        return axios.post('/api/local_auth/signup', {userCreds})        
            .then(response => {                    
                console.log({ 'signup_response': response })  
                
                if (response.data.error) {
                    //send errors to client
                    let error = response.data.error                    
                    dispatch(singUpError(error))
                } 
                if (response.data.message) { 
                    let message = response.data.message                    
                    dispatch(signUpSuccess(message))  
                }

                                                  
            }
        )
    }

}
const axios = require('axios')

//Action Creator

const submitSignUpCredentials = () => { 
    return {        
        type: 'SUBMIT_SIGNUP_CREDS'
    }
}

const signUpSuccess = () => {
    return {
        type: 'SIGNUP_SUCCESS'      
    }
}

//Action
export const submitSignUp = (userCreds) => {    
    return (dispatch) => {            
       dispatch(submitSignUpCredentials())       
        return axios.post('/api/local_auth/signup', {userCreds})        
            .then(response => {                    
                console.log(response)
                dispatch(signUpSuccess())
            }
        )
    }

}
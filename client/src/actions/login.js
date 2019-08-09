const axios = require('axios')

//Action Creator

const submitLoginCredentials = () => { 
    return {        
        type: 'SUBMIT_LOGIN_CREDS'
    }
}

// const loginSuccess = () => {
//     return {
//         type: 'LOGIN_SUCCESS'      
//     }
// }

// const loginFailed = () => { 
//     return {
//         type: 'LOGIN_FAIL'
//     }
// }

//Action
export const submitLogin = (userCreds) => {    
    return (dispatch) => {        
       dispatch(submitLoginCredentials()) 
        return axios.post('/api/local_auth/login', userCreds )        
            .then(response => {                    
                // set state so client can redirect to homepage which will run verifyAuth.
                console.log("testst", response)    
               
            }
        )
    }

}
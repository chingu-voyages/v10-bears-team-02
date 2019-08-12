const axios = require('axios')

//Action Creator

const submitLoginCredentials = () => { 
    return {        
        type: 'SUBMIT_LOGIN_CREDS'
    }
}

const loginSuccess = (payload) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload     
    }
}

// const loginFailed = () => { 
//     return {
//         type: 'LOGIN_FAIL'
//     }
// }

//Action
export const submitLogin = (userCreds, history) => {    
    return (dispatch) => {        
       dispatch(submitLoginCredentials()) 
        return axios.post('/api/local_auth/login', userCreds )        
            .then(response => {       
                debugger             
                dispatch(loginSuccess(response.data.userData))     
                history.push('/mygarden')
            }
        )
    }

}
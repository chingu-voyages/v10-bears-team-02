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

const loginFailed = (payload) => { 
    return {
        type: 'LOGIN_FAIL',
        payload
    }
}

//Action
export const submitLogin = (userCreds, history) => {    
    return (dispatch) => {        
       dispatch(submitLoginCredentials()) 
        return axios.post('/api/local_auth/login', userCreds )        
            .then(response => {  
                
                if (response.data.error) {
                    //send errors to client                           
                    dispatch(loginFailed(response.data.error)) // login reducer
                } 
                if (response.data.userData) {                                      
                    dispatch(loginSuccess(response.data.userData)) //userData reducer
                    history.push('/mygarden')  
                }

                
            }
        )
    }

}
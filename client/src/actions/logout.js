const axios = require('axios')

//Action Creator

const logOut = (payload) => { 
    return {        
        type: 'LOG_OUT', 
        payload
    }
}
//Action
export const submitLogOut = () => {    
    return (dispatch) => {        
      
        return axios.post('/api/local_auth/logout')        
            .then(response => {                    
                // figure out way to redirect here, possbily pass history object and push.
                console.log("logout", response)   
                dispatch(logOut(false)) // safe to assume we logged out with req.logOut() ??
               
            }
        )
    }

}
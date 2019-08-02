const axios = require('axios')

//Action Creator

const verifyCookie = () => { 
    return {        
        type: 'VERIFY_COOKIE'
    }
}


//Action
export const verifyAuth = () => {    
    return (dispatch) => {        
       //dispatch(verifyCookie()) 
        return axios.post('/api/local_auth/check' )        
            .then(response => {                    
                console.log("verify", response)                
            }
        )
    }

}
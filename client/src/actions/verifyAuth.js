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
        return axios.get('/api/local_auth/check' )        
            .then(response => {                    
                console.log("check auth", response.data)                
            }
        )
    }

}
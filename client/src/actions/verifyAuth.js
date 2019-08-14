const axios = require('axios')
//Action Creator

const verifyCookie = () => { 
    return {        
        type: 'VERIFY_COOKIE'
    }
}

const cookieStatus = (payload) => { 
    return {
        type: 'COOKIE_STATUS', 
        payload
    }
}

//Action
export const verifyAuth = () => {    
    return (dispatch) => {        
       dispatch(verifyCookie()) 
        return axios.get('/api/local_auth/check' )        
            .then(response => {                    
                dispatch(cookieStatus(response.data.auth)) //  userData.js Reducer
            }
        )
    }

}
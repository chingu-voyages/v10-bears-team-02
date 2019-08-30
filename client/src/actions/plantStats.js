//import { CardActions } from '@material-ui/core';

const axios = require('axios')

//Action Creator

/**
 * 
 */
const querySinglePlant = () => { 
    return {
        
        type: 'QUERY_SINGLE_PLANT'
    }
}

/** 
 * @param {String} data  plant id
 */
const getPlantStats = (payload) => {
    return {
        type: 'GET_PLANT_STATS',
        payload
    }
}

const addPlantSuccess = (payload) => {
    return {
        type: 'ADD_PLANT_SUCCESS',
        payload
    }
}

const getUserDataSuccess = (payload) => {
    return {
        type: 'USER_DATA_SUCCESS',
        payload
    }
}



//Action


export const fetchPlantStats = (id) => {    
    return (dispatch) => {            
       dispatch(querySinglePlant())       
        return axios.post('/api/plant', {id: id})        
            .then(response => {                    
                dispatch(getPlantStats(response.data)) 
            }
        )
    }

}

export const addPlant = (plant) => {
    return (dispatch) => {
        return axios.post('/api/library/create', {plant: plant})
        .then(
            dispatch(addPlantSuccess(plant))
        )
    }
}

export const loadUserData = () => {
    return (dispatch) => {
        return axios.get('/api/userData')
        .then(response => {
            dispatch(getUserDataSuccess(response.data))
        })
    }
}
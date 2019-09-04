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
        .then(response =>{
            console.log(response)
            if(!response.data.err){
                dispatch(addPlantSuccess(plant))
            }else{
                console.log(response.data.err)
            }                    

        })
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
//Action Creator

/**
 * 
 * @param {String} data  plant id
 */
export const getPlantStats = (data) => {
    return {
        type: 'GET_PLANT_STATS',
        data
    }
}



//Action

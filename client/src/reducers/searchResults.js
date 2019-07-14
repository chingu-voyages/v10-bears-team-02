const initialState = {
    list : []
}


export default (state = initialState, action) => {

    switch(action.type) {
        case 'STORE_PLANT_QUERY_RESULTS':
                return {
                    ...state, 
                    list: action.payload
                }
     

            default:
                return state;
    }
}
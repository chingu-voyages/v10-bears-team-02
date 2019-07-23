const initialState = {}


export default (state = initialState, action) => { 

    switch (action.type) { 

        case 'GET_PLANT_STATS':

            return action.payload
        
        default: 
            
            return  state
          
    }
      
}
const initialState = {}


export default (state = initialState, action) => { 
    debugger
    switch (action.type) { 

        case 'GET_PLANT_STATS':

            return action.payload
        
        default: 
            
            return  state
          
    }
      
}
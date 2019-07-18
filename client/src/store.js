import thunk from 'redux-thunk'
import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose
} from 'redux';
import formData from './reducers/formData';
import searchResults from './reducers/searchResults'

const rootReducer = combineReducers({
    formData, 
    searchResults
})

const middleware = [thunk]

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middleware))
)

export default store;

// const store = {
//     formData: {
//         searchBar: {
//             query: '',
//         },
//         login: {
//             email: '',
//             password: ''
//         },
//         register: {
//             email: '',
//             username: '',
//             password: '',
//             verify_password: ''
//         }
//     },
//     userData: {
//         email: '',
//         username: '',
//         plantsLibrary: [],
//         currentPlant: {
//             name: '',
//             perennial: null
//         },
//         authenticated: false
//     },
//     searchResults: []
// }
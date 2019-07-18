import thunk from 'redux-thunk'
import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose
} from 'redux';
import formData from './reducers/formData';

const rootReducer = combineReducers({
    formData
})

const middleware = [thunk]

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middleware))
)

console.log(store)

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
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    // reducers go here
})

const middleware = [thunk]

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
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
const initialState = {
    email: '',
    username: '',
    plantsLibrary: [],
    currentPlant: {
        name: '',
        perennial: null
    },
    authenticated: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
const initialState = {
    searchBar: {
        query: '',
    },
    login: {
        email: '',
        password: ''
    },
    register: {
        email: '',
        username: '',
        password: '',
        verify_password: ''
    }
}

const store = {
    formData: {
        searchBar: {
            query: '',
        },
        login: {
            email: '',
            password: ''
        },
        register: {
            email: '',
            username: '',
            password: '',
            verify_password: ''
        }
    },
    userData: {
        email: '',
        username: '',
        plantsLibrary: [],
        currentPlant: {
            name: '',
            perennial: null
        },
        authenticated: false
    },
    searchResults: []
}
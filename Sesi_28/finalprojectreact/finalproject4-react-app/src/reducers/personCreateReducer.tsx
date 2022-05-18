const CREATE_PEOPLE_REQUEST = 'CREATE_PEOPLE_REQUEST'
const CREATE_PEOPLE_SUCCESS = 'CREATE_PEOPLE_SUCCESS'
const CREATE_PEOPLE_FAILURE = 'CREATE_PEOPLE_FAILURE'

const initialState = {
    loading: false,
    people: [],
    error: ''
}

const personCreateReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_PEOPLE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_PEOPLE_SUCCESS:
            return {
                loading: false,
                people: action.payload,
                error: ''
            }
        case CREATE_PEOPLE_FAILURE:
            return {
                loading: false,
                people: [],
                error: action.payload
            }
        default: return state
    }
}

export default personCreateReducer
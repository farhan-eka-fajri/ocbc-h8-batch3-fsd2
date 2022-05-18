const UPDATE_PEOPLE_REQUEST = 'UPDATE_PEOPLE_REQUEST'
const UPDATE_PEOPLE_SUCCESS = 'UPDATE_PEOPLE_SUCCESS'
const UPDATE_PEOPLE_FAILURE = 'UPDATE_PEOPLE_FAILURE'

const initialState = {
    loading: false,
    people: [],
    error: ''
}

const personUpdateReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_PEOPLE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_PEOPLE_SUCCESS:
            return {
                loading: false,
                people: action.payload,
                error: ''
            }
        case UPDATE_PEOPLE_FAILURE:
            return {
                loading: false,
                people: [],
                error: action.payload
            }
        default: return state
    }
}

export default personUpdateReducer
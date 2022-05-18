import axios from 'axios'


const CREATE_PEOPLE_REQUEST = 'CREATE_PEOPLE_REQUEST'
const CREATE_PEOPLE_SUCCESS = 'CREATE_PEOPLE_SUCCESS'
const CREATE_PEOPLE_FAILURE = 'CREATE_PEOPLE_FAILURE'

export const createPeople = (newInput: any) => {
    return async (dispatch: any) => {
        dispatch(createPeopleRequest())
        await axios.post(
            `http://localhost:5000/keys`, {
            firstName: newInput.firstName,
            lastName: newInput.lastName,
            key: newInput.key
        }
        )
            .then((response: any) => {
                const people = response.data
                dispatch(createPeopleSuccess(people))

            })
            .catch((error: any) => {
                dispatch(createPeopleFailure(error.message))
                alert(`Invalid input or 'Key' is duplicate.`)
            })
    }
}

export const createPeopleRequest = () => {
    return {
        type: CREATE_PEOPLE_REQUEST
    }
}

export const createPeopleSuccess = (people: any) => {
    return {
        type: CREATE_PEOPLE_SUCCESS,
        payload: people
    }
}

export const createPeopleFailure = (error: any) => {
    return {
        type: CREATE_PEOPLE_FAILURE,
        payload: error
    }
}
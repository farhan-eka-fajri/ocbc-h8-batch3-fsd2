
export const getUsers = () => {

    // cara salah #1
//     let users = [];
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         users = data
//     })

//     return { type: 'setUsers', payload: users}



return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    dispatch({ type: 'setUsers', payload: data})

}
}


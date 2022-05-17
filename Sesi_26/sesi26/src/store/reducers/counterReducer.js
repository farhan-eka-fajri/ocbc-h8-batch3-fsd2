// inisialisasi state dan reducer

const initialState = {
    count: 0,
}

// aturan aturan di reducer:
// 1. hanya memiliki 1 tujuan => untuk menimpa state lama dengan state baru
// 2. tidak boleh ada side efect lainnya dalam artian panggil function ataupun class luar




const reducer = (state = initialState, action ) => {
    // action => { type: string, payload: any }
    switch(action.type){
        case 'increment':
            return { ...state, count: state.count + 1} //cara mengembalikan statenya yang sudah diubah

        case 'decrement':
            return { ...state, count: state.count - 1}  

        case 'reset':
            return{ ...state, count: initialState.count} //cara mereset state dengan initialstate

        default: //default case untuk swtich-case di luar pilihan
            return state
    }
}

export default reducer
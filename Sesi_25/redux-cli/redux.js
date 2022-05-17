// langkah-langkah setup redux
//     1. kita import createStore dari redux
//     2. kita siapkan initialState dan juga reducer
//     3. kita siapkan storenya dengan value dari createStore
//     4. kita tambahkan satu function subscriber
//     5. kita jalankan dispatch-nya

//     bonus:
//     1. buat reducer lagi untuk ganti nama
//      => manfaatkan combineReducer()

// 1. import createStore dari redux
// => manfatkan combineReducers()
import Redux, { combineReducers } from 'redux';

// !deprecated, gunakan configureStore dari @redux/toolkit sebagai gantinya
const { createStore } = Redux;

// 2. siapkan initialState(yg bertipe data objek) dan reducernya
const counterInitialState = {
    counter: 0
};
// reducer => merupakan function yang meneruma (state = initialState ,action) => mereturn newState 
// state = initialState => untuk inisialisasi sebuah state di dalam reducer
// action => {type: string, payload: any}
const counterReducer = (state = counterInitialState, action) => {


    console.log({state, action})

    switch(action.type){
        case 'increment':
            // return:
            // 1. pecahkan state lama ke dalam object baru
            // 2. masukan data baru ke dalam object
            return{ ...state, counter: state.counter + 1 };
        case 'decrement':
            return{ ...state, counter: state.counter - 1 };
        case 'reset':
            return{ ...state, counter: counterInitialState.counter };
    }

    return state;
}

//bonus: combineReducer()

const userInitialState = {
    name: ""
}

const userReducer = (state = userInitialState, action) => {
    switch(action.type){
        case 'setName':
            return { ...state, name: action.payload};
    }

    return state;
}

// 3. buat store dengan value dari createStore(reducer)

// const store = createStore(counterReducer);

// 3. buat store dengan reducer yang digabungkan TIP: gunakan combineReducer()
//gabungkan 2 reducer atau lebih ke dalam satu wadah
const reducers = { 
    user: userReducer, 
    counter: counterReducer 
}; 

//const state = store.getState()
// state.[namaReducer].[property]
// state.user.name
// state.counter.counter
// createStore() dengan parameter combineReducers()
// combineReducers() => berisi parameter dari si reducer yang sudah kita gabungkan pada langkah di atas
const store = createStore(combineReducers(reducers));

// 4. [optional] subsribe-kan

store.subscribe(() => {
//jika terjadi perubahan pada state di dalam store, kita bisa gunakan subscribe ini untuk memonitor perubahannya, atau untuk menjalankan function tertentu

// store.getState() => untuk mendapatkan state terkini dari storenya

console.log(store.getState())

})

// 5. jalankan aksinya

// store.dispatch => kita lemparkan action ke dalam reducer
// action =>  {type: string, payload?: any}

store.dispatch({type: 'increment'})
store.dispatch({type: 'setName', payload: 'Alex'})



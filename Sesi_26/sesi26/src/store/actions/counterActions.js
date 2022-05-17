//  Action Creator
// 1. export langsung functionnya 
// 2. function yang kita buat haru mereturn action object { type: string, payload?: any}
// 3. [JIKA] sudah menerapkan middleware (redux-thunk), function yangkita buat harus mereturn antara : [1] action object {type: string, payload?: any}, atau [2] sebuah function (dispatch,getState) => {}

//  kalau bisa jangan ikutin practice seperti ini dulu
import store from ".."
export const incrementCounter = () => {
    // cara yang salah
    // const currentCount = store.getState()
    // console.log(currentCount)

    // cara yang benar
    const currentState = store.getState()
    const count = currentState.counter.count

    if(count + 1 > 10){
        alert("counter sudah lebih dari 10!!")
        return{type:''}
    } else{
        return {type: 'increment'}
    }
}
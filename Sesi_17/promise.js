// sintaks promise => new Promise()
// kita buat di dalam sebuah function

function janjian(tempat){
    // bentuk dasar promise di dalam function
    return new Promise((resolve, reject) => {
        // 1. cek kondisi tempat
        if (tempat) {
        // kalau ada, maka kita panggil resolve(), atau
        resolve(`Janjian berhasil dilakukan di ${tempat}`)
        } else {
        // kalau tidak ada, maka kita panggil reject()
        reject("Nama tempat harus diisi!")
        }
    })
}

// console.log(janjian("Online class"))

//penggunaan dasar Promise

// janjian("Online class")
// // jika Promise memanggil resolve, maka then akan dipanggil
// .then(pesan => {
//     console.log(pesan)
// })


//penggunaan Promise dengan chaining

janjian("kafe").then(pesan => {
    console.log(pesan)


    //agar bisa dilakukan chaining maka panggil returnnya
    // dengan promise baru
    return janjian("sawah")
})
.then(pesanLain => {
    console.log(pesanLain)
    // coba lakukan error
    return janjian()
})
.then(() => {
    console.log("Janjian selesai!")
})
// error harus di hangle dengan .catch
.catch(pesanError => {
    console.error(pesanError)
})

console.log(
    fetch('https://jsonplaceholder.typicode.com/users')
)
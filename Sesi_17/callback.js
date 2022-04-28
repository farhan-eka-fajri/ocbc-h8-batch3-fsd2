function greetBack (name) {
    console.log(`Halo ${name}! apa kabarnya?`)
}

function greet (name) {
    console.log(`Halo, nama saya ${name}`)
    return name
}


//higher order function

// greetBack(greet("Alex"))

function introduceCallback (name, callback){
    console.log(`Halo, nama saya ${name}`)

    callback(name) //berfungsi menelpon balik
}

// introduceCallback("Edward", (nickname) => {
//     // console.log('callback function dipanggil')
//     console.log(nickname)
// })

introduceCallback("Farhan", greetBack)
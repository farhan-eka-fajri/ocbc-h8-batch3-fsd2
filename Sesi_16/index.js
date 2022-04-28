// menampilkan data ke dalam terminal/console
// console.log("hello world ")

// deklarasi variable dengan benar
//  var let dan const

// penulisan :
//  => nggak boleh angka di depan => 3sekawan => TypeError
//  => camelCase => classroomStudents
//  => simbol yang dibolehkan => $ dan _


// tipe data number, string, boolean
// template literal = backtick
const name = `Tevin` //string
const age = 21 //number
const aktif = true //boolean
const project = null //object,tapi falsy
// ! = negasi, !! = truthty atau falsy
console.log({
    value : project, //null
    negasiValue : !project, //true
    truthinessValue : !!project //false
})


// Array

const people = ["Alex", "Nisa", "Nathan", "Kevin"]

// console.log(people)
// console.table(people)

// array looping
const newPeople = people.map((person) => {
    console.log(person)

    return `${person} - peserta`
})

console.table(newPeople)


// this keyword

// 1.  => variable global (tidak disarankan)
this.name = "Edward"
console.log(this.name)

// 2. => sebagai objek itu sendiri

// const person = {
//     name: "Farhan",
//     age: 18,
//     // jangan gunakan arrow function jika ingin me refer kepada object itu sendiri
//     introduce() {
//         console.log(`Halo! saya ${this.name} dan saya berumur ${this.age} tahun `)
//     }
// }

// person.introduce()

class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce () {
        console.log(`Halo! saya ${this.name} dan saya berumur ${this.age} tahun `)
    }
}

const fira = new Person ("fira", 20)
const nathan = new Person ("Nathan", 18)

fira.introduce()
nathan.introduce()

// destructuring object
const person = {
    name: "Farhan",
    age: 18,
    location: "Earth"
}

const {age: personAge, name: personName, location} = person

console.log(personName, personAge, location)


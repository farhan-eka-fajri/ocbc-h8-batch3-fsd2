import React, { Component } from "react";

// Penulisan harus PascalCase dan sama dengan nama file
class Button extends Component{

    constructor(props){
        super(props)
        //  bind() = kita "ikat" sebuah function dengan konteks dari sebuah objek lain
        // //solusi 1 => bind()
        // this.setTitle.bind(this)

        console.log(this.props)
        // mendefinisikan state
        this.state = {
            title: this.props.title || 'Default Value'
        }
    }

    //pada saat inisialisasi props/state
    componentDidMount(){
        console.log('componentDidMount() => component pertama kali dibuat')
        alert("component berhasil dibuat")
    }

    //shouldComponentUpdate akan bertindak sebagai conditional sebelum component di render ulang 
    shouldComponentUpdate(){
        //jika return true, maka component akan dirender ulang, selebihnya tidak dirender ulang
        if(this.state.title !== ""){
            return true
        }

        return false;
    }

    //saat melakukan perubahaan pada komponen
    componentDidUpdate(){
        console.log('componentDidUpdate()=> component berhasil diubah')
        alert('anda berhasil mengklik sebuah tombol!')
    }

    //saat load ulang browser
    componentWillUnmount(){
        alert('anda berhasil menghancurkan komponen')
    }


    // mendefinisikan state dengan function bisa melakukan formatting
    getTitle(){
        // sama seperti menggunakan pises pada angular
        let formattedTitle = this.state.title
        return formattedTitle.toLowerCase()
    }
    // action untuk mengubah this.state.title dengan menggunakan this.setState()
    // action ini harus menggunakan arrow function
    setTitle = () => { //thisnya di scope/dibatasi
        // this.setState => mengirimkan data ke dalam store dalam component kemudian mengubah data pada state tersebut
        this.setState({
            // key: value
            title: "Welcoming headache"
        })
    }
    // akan digunakan untuk menampilkan element html
    render(){
        return(
            
            <>
            {/* console.log(this.props) */}
            {/* cara menampilkan state dengan this.state */}
            <h1>{this.state.title}</h1>
            <h2>{this.getTitle()}</h2>
            {/* solusi 1 = bind terus2an */}
            <button onClick={this.setTitle}>Ganti Judul!</button>
            
            
            </>
        )
    }
}

export default Button;
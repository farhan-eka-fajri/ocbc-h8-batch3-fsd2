import React, { Component } from "react";

class Judul extends Component{

    constructor(props){
        super(props)

        this.state = {
                title: this.props.title || 'Fun Facts About Countries'
            }
        }


    

    render(){
        return(
           <>
           
           <h1 className="App">{this.state.title}</h1>
           
           </>
           

        )
    }

}




export default Judul;
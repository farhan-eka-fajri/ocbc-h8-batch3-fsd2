import React, { Component } from "react";

class Populated extends Component{

    // constructor(){
    //     super()
    //     }


    

    render(){
        return(
           <>
           

           <div class="App" >
          <h2>Top 3 Biggest Population</h2>

      <div class="container">
          <div class="row g-5">
              <div class="col-md-4">
                  <div class="card">
                      <div class="card-body">
                          <h3 class="card-title"> China </h3>
                          <h4 class="card-text">1,403,500,365 People</h4>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row g-5">
              <div class="col-md-4">
                  <div class="card">
                      <div class="card-body">
                          <h3 class="card-title"> United States </h3>
                          <h4 class="card-text">325,365,189 People</h4>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row g-5">
              <div class="col-md-4">
                  <div class="card">
                      <div class="card-body">
                          <h3 class="card-title"> Russia </h3>
                          <h4 class="card-text">144,463,451 People</h4>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
           
           
           </>
           
            



        )
    }

}




export default Populated;
import React, { Component } from "react";

class Area extends Component{

    // constructor(){
    //     super()
    //     }


    

    render(){
        return(
           <>
           
           <div class="App" >
          <h2>Top 3 Biggest Area</h2>

      <div class="container">
          <div class="row g-5">
              <div class="col-md-4">
                  <div class="card">
                      <div class="card-body">
                          <h3 class="card-title">Russia</h3>
                          <h4 class="card-text">17,098,246 km²</h4>
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
                          <h3 class="card-title">Canada</h3>
                          <h4 class="card-text">9,984,670 km²</h4>
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
                          <h3 class="card-title">China</h3>
                          <h4 class="card-text">9,596,961 km²</h4>
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




export default Area;
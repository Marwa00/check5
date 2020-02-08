import React from 'react';
import { Component } from 'react';

 class Header extends Component
 {
     state ={
         msg: "uqheuoehei"

     }
     componentDidMount()
     {
        setTimeout(alert("Hello message"), 10000);
    
    } 


    render()
{
    return(
        <div>
        {this.state.msg} 

    </div>
    )

}



 }


 export default Header;
import React from 'react';
import { Component } from 'react';

 class Header extends Component
 {
    state ={
        msg: "Hello message"



     }


    render()
{
    return(
        <div>
            {this.state.msg}
            <button onClick={() =>{this.setState({msg:"bonjour"})}}></button>
        </div>
    )

}



 }


 export default Header;
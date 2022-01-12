import React, { Component } from 'react'
import Tail from "./Tail.jpg"
import "./Coin.css"

class Coin extends Component {
    render(){
        return(
            <div>
                <img src={this.props.img} className="imgStyle"/>
            </div>
        )
    }
}

export default Coin;
import React, { Component } from 'react'
import Coin from "./Coin";
import Tail from "./Tail.jpg"
import "./CoinFlipper.css"


class CoinFlipper extends Component{
    static defaultProps = {
    }
    constructor(props){
        super(props);
        this.state = {
            flips:0,
            heads:0,
            tails:0,
            arr: " "
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let rand = Math.floor(Math.random()*2);
        const src=["https://tinyurl.com/react-coin-heads-jpg",Tail];
        // this.setState((currState)=>{
        //     console.log(currState);
        //     // currState.flips:
        // })
        let flip = this.state.flips;
        let head = this.state.heads;
        let tail = this.state.tails;
        // {src[rand]===0? head+1 : tail+1};
        if(rand===0){
            head = head+1;
        }
        else{
            tail = tail+1;
        }
        return this.setState({...this.state,arr:src[rand],flips:flip+1,heads:head,tails:tail});
        
    }
    render(){
        return(
            <div className="flipper">
                <h1>Let's flip the Coin!!</h1>
                <Coin img={this.state.arr}/>
                <button onClick={this.handleClick}>Flip here</button>
                <p>Out of {this.state.flips},there have been {this.state.heads} heads and {this.state.tails} tails</p>
            </div>
        )
    }
}

export default CoinFlipper;
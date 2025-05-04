import { Component } from "react";
class MyCounter extends Component{
    constructor(){
        super();
        this.state={fn:60, sn:40, res:0}

    }
    addition=()=>{
        this.setState({res:this.state.fn+this.state.sn});
    }
    substraction=()=>{
        this.setState({res:this.state.fn-this.state.sn});
    }
    multiplication=()=>{
        this.setState({res:this.state.fn*this.state.sn});
    }
    division=()=>{
        this.setState({res:this.state.fn/this.state.sn});
    }

    render()
    {
        return(
            <div>
                <h1 style={{color:"rebeccapurple"}}>Arithmatic operation</h1>
                <h2 style={{color:"red"}}>Result of {this.state.fn} and {this.state.sn} is {this.state.res}</h2>

                <button style={{color:"green"}} onClick={this.addition}>Addition</button>
                &nbsp; &nbsp;
                <button style={{color:"blue"}} onClick={this.substraction}>Substraction</button>
                &nbsp; &nbsp;
                <button style={{color:"brown"}}onClick={this.multiplication}>Multiplication</button>
                &nbsp; &nbsp;
                <button onClick={this.division}>Division</button>
            </div>
        )
    }
}
export default MyCounter
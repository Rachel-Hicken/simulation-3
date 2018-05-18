import React, {Component} from 'react';
// import axios from 'axios';

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            search: ''
        }
        this.resetHandler = this.resetHandler.bind(this);
    }
    
changeHandler(value){
    this.setState({
        search: value
    })
}

resetHandler(){
    this.setState({
        search: ''
    })
}

    render(){
        return(
            <div>Dashboard
                <p>{this.state.search}</p>
                <input id="myInput" onChange={ (e) => this.changeHandler( e.target.value ) }
                type="text" />
                <button>Search</button>
                <button onClick={this.resetHandler}>Reset</button>
            </div>
            
        )
    }
}
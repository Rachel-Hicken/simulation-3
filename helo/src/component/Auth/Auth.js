import React, { Component } from 'react';
import axios from 'axios';


export default class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            pass: ''
        }
        this.createUser = this.createUser.bind(this);
        this.getUser = this.getUser.bind(this);
    }

    usernameHandler(value) {
        this.setState({ username: value })
    }

    passwordHandler(value) {
        this.setState({ pass: value })
    }

    createUser( event ) {
        const { username, pass } = this.state;
        if ( event.key === "Enter" && username.length !== 0 ) {
          axios.post( '/', { username, pass } ).then( response => {
            this.setState({ username: response.data, pass: response.data });
          });
    
          this.setState({ username: '' , pass: ''});
        }
      }

      getUser() {
        axios.get( '/auth/:id' ).then( response => {
          this.setState({ username: response.data, pass: response.data });
        });
      }

    render() {
        return (
            <div>
                <input className="username"
                    placeholder="username"
                    onChange={(e) => this.usernameHandler(e.target.value)}
                    type="text" />
                <input className="password"
                    placeholder="password"
                    onChange={(e) => this.passwordHandler(e.target.value)}
                    type="text" />
                <button onClick={this.getUser}>Login</button>
                <button onClick={this.createUser}>Register</button>
            </div>
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios';

export default class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.createUser = this.createUser.bind(this);
    }

    usernameHandler(value) {
        this.setState({ username: value })
    }

    passwordHandler(value) {
        this.setState({ password: value })
    }

    createUser( event ) {
        const { username, password } = this.state;
        if ( event.key === "Enter" && username.length !== 0 ) {
          axios.post( '/', { username } ).then( response => {
            this.setState({ username: response.data });
          });
    
          this.setState({ username: '' });
        }
      }

    render() {
        return (
            <div>Auth
                <input className="username"
                    placeholder="username"
                    onChange={(e) => this.usernameHandler(e.target.value)}
                    type="text" />
                <input className="password"
                    placeholder="password"
                    onChange={(e) => this.passwordHandler(e.target.value)}
                    type="text" />
                <button onClick={this.createUser}>Login</button>
                <button>Register</button>
            </div>
        )
    }
}
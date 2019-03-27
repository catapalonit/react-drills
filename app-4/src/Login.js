import React, { Component } from "react";

class Login extends Component {
    constructor() {
    super();

    this.state = {
    username: "",
    password: ""
    };
}

handleUsernameChange(name) {
    this.setState ( {username: name} )
}

handlePasswordChange(pass){
    this.setState ( {password: pass} )
}
handleLogin(){
    alert("you entered your username and password" )
}

render() {
    return (
        <div>
        <div>
            <input onChange = { ( event ) => this.handleUsernameChange(event.target.value) }></input>
            <input onChange = { ( event ) => this.handlePasswordChange(event.target.value) }></input>
        </div>
        <div>
            <button onClick = {this.handleLogin}>Login</button>
        </div>
        </div>
    );
}
}

export default Login;
import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';

class Auth extends Component{
    constructor(){
        super()
        this.state ={
            username: '',
            password: ''
        }
    }

    updateUsername(value){
        this.setState({
          username: value
        })
      }

    updatePassword(value){
        this.setState({
            password: value
        })
    }

    register(username, password){
        axios.post('api/register', {username: this.state.username, password: this.state.password}).then( response => {
            console.log(response.data)
        })
    }

    // login(username, password){
    //     axios.post('api/user', {username: this.state.username, password: this.state.password})
    // }

    render(){
        return(
            <div>
                <p> Username: </p> <input value = {this.state.username} onChange = { (event) => this.updateUsername(event.target.value)}/>
                <p> Password: </p> <input value = {this.state.password} onChange = { (event) => this.updatePassword(event.target.value)}/>
                <br/>
                <button className = 'btn'> Login </button>  
                <Link to = '/dashboard'> <button className = 'btn' onClick = {() => this.register()}> Register </button> </Link>
            </div>
        )
    }
}

export default connect(null, {getUser}) (Auth);
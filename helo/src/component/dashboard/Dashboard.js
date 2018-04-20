import React, {Component} from 'react';


class Dashboard extends Component{
    constructor(){
        super()
        this.state ={
        posts: [],
        search: '',
        userposts: true
    }
    }

    render(){
        return(
            <div> 
                Dashboard
            </div>
        )
    }
}

export default Dashboard;
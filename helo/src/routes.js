import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './component/auth/Auth';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Post from './component/post/Post';


export default(
    <Switch>
        <Route exact path = "/" component = {Auth}/>
        <Route path = "/dashboard" component = {Dashboard}/>
        <Route path = "/post/:postid" component = {Post}/>
        <Route path = "/new" component = {Form}/>
    </Switch>
)
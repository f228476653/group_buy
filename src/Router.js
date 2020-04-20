import {  BrowserRouter, Switch, Route } from "react-router-dom";
import React from  'react';
import App from 'containers/App.js'
import Login from 'components/Login/Login.js'
import Register from 'components/Register/Register.js'

const Router = () => (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {App}></Route>
                <Route path="/login" component = {Login}></Route>
                <Route path="/register" component = {Register}></Route>
            </Switch>
        </BrowserRouter>
    );

export default Router;
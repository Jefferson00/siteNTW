import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/home/home'
import Atas from './pages/atas/'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/atas" exact component={Atas}></Route>
            </Switch>
        </BrowserRouter>
    )
}
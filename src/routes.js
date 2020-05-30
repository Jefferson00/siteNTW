import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/home/home'
import Atas from './pages/atas/'
import Produtos from './pages/produtos/'
import Parceiros from './pages/parceiros/'
import Contato from './pages/contato/'
import Cases from './pages/cases/'
import Login from './pages/admin/login'
import Admin from './pages/admin/index'



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/atas" exact component={Atas}></Route>
                <Route path="/produtos" exact component={Produtos}></Route>
                <Route path="/parceiros" exact component={Parceiros}></Route>
                <Route path="/contato" exact component={Contato}></Route>
                <Route path="/cases" exact component={Cases}></Route>
                <Route path="/admin" exact component={Login}></Route>
                <Route path="/admin/index" exact component={Admin}></Route>
            </Switch>
        </BrowserRouter>
    )
}
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; //tudo componente

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes(){
    return (
        //o comportamento padrão do Route no React é q ele deixa ser chamada + de 1 rota ao mesmo tempo
        //esse Switch vai garantir q somente uma rota será executada por vez

//precisa do exact para o "/" ser lido como o url q queremos, visto que todas as urls vão conter "/"
        <BrowserRouter> 
            <Switch>
                <Route path="/" exact component={Login} /> 
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    );
}
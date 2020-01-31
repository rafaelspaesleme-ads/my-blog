import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'

import Contents from './tests/Contents'

const Routes = () => (   
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/teste/content" component={Contents} />
        </Switch>
    </BrowserRouter>
);

export default Routes

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Followers from './pages/inserts/Followers';
import ProfileFollower from './pages/views/ProfileFollower'

import Contents from './tests/Contents'

const Routes = () => (   
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/new-follower" component={Followers} />
            <Route exact path={`/profile/follower/${1}`} component={ProfileFollower} />
            <Route exact path="/teste/content" component={Contents} />
        </Switch>
    </BrowserRouter>
);

export default Routes

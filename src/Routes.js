import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Followers from './pages/inserts/Followers';
import ProfileFollower from './pages/views/ProfileFollower'
import Posts from './pages/inserts/Posts'
import Article from './pages/inserts/Articles'
import Contacts from './pages/inserts/Contacts'
import Portfolios from './pages/inserts/Portfolios'
import Repositories from './pages/inserts/Repositories'

import Contents from './tests/Contents'

const hashPage = '12b907cab9ac73e57872cc7d6159a762'

const Routes = () => (   
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/new-follower" component={Followers} />
            <Route exact path={`/create/post`} component={Posts} />
            <Route exact path={`/create/article`} component={Article} />
            <Route exact path={`/create/contact`} component={Contacts} />
            <Route exact path={`/create/portfolio`} component={Portfolios} />
            <Route exact path={`/create/repo`} component={Repositories} />
            <Route exact path={`/profile/follower/${1}`} component={ProfileFollower} />
            <Route exact path="/teste/content" component={Contents} />
        </Switch>
    </BrowserRouter>
);

export default Routes

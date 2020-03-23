import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Followers from './pages/inserts/Followers';
import ProfileFollower from './pages/views/ProfileFollower'
import Posts from './pages/inserts/Posts'
import Article from './pages/inserts/Articles'
import Contacts from './pages/inserts/Contacts'
import Portfolios from './pages/inserts/Portfolios'
import Repositories from './pages/inserts/Repositories'
import Dashboard from './pages/views/Dashboard'

import Contents from './tests/Contents'
import { isAuthenticated } from "./services/auth";

const hashPage = '12b907cab9ac73e57872cc7d6159a762'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/dashboard", state: { from: props.location } }} />
        )
      }
    />
);

const Routes = () => (   
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/xkj-login" component={Login} />
            <Route exact path="/new-follower" component={Followers} />
{/*             <Route exact path={`/create/post`} component={Posts} />
            <Route exact path={`/create/article`} component={Article} />
            <Route exact path={`/create/contact`} component={Contacts} />
            <Route exact path={`/create/portfolio`} component={Portfolios} />
            <Route exact path={`/create/repo`} component={Repositories} /> */}
            <Route exact path={`/profile/follower/${1}`} component={ProfileFollower} />
            <Route exact path="/teste/content" component={Contents} />
            <PrivateRoute path="/kwlc-dashboard" component={Dashboard} />
            <Route path="*" component={() => <h1>Pagina não encontrada!</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/views/Dashboard'
import ShowArticle from './pages/views/ShowArticle'
import ShowPost from './pages/views/ShowPost'

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
            <Route exact path="/artigo/:idArticle/:titleArticle" component={ShowArticle} />
            <Route exact path="/post/:idPost/:titlePost" component={ShowPost} />
            <Route exact path="/teste/content" component={Contents} />
            <PrivateRoute path="/kwlc-dashboard" component={Dashboard} />
            <Route path="*" component={() => <h1>Pagina não encontrada!</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes

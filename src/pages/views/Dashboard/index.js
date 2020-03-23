import React, { Component } from 'react';
import AccessDashboardSuccefull from '../utils/AccessDashboardSuccefull'
import AccessDashboardFail from '../utils/AccessDashboardFail'

// import { Container } from './styles';
import './style.css'


export default class Dashboard extends Component {

    state = {
        token: ''
    }

    componentDidCatch() {
        this.loadingLocalStorage();        
    }


    loadingLocalStorage() {
        const { token } = this.state;
        token = localStorage.getItem('auth-token');
    }

    render() {
        return (
            <>
                {this.state.token !== null 
                    ? <AccessDashboardSuccefull /> 
                    : <accessDashboardFail />}
            </>
        );
    }
}

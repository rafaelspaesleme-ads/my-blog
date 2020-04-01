import React, { Component } from 'react';
import AccessDashboardSuccefull from '../utils/AccessDashboardSuccefull'
import AccessDashboardFail from '../utils/AccessDashboardFail'

// import { Container } from './styles';
import './style.css'


export default class Dashboard extends Component {
    render() {
        return (
            <>
                {localStorage.getItem('auth-token') !== null 
                    ? <AccessDashboardSuccefull /> 
                    : <accessDashboardFail />}
            </>
        );
    }
}

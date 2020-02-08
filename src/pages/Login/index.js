import React, { Component } from 'react'

import FormLogin from './../../plugins/semantic/FormLogin'

import './style.css'

export default class Login extends Component {
    render() {
        return (
            <div id="main-login">
                <strong>Faça seu login</strong>
                <div id="main-form-login">
                    <FormLogin />
                </div>
            </div>
        )
    }
}

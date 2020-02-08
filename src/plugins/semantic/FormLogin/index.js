import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function FormLogin() {
    return (
        <div>
            <Form>
                <Form.Field>
                <label>Usuário/Email: </label>
                <input placeholder='Digite seu username ou e-mail de acesso' />
                </Form.Field>
                <Form.Field>
                <label color={'yellow'} >Senha: </label>
                <input type="password" placeholder='Digite sua senha de acesso' />
                </Form.Field>
                <Form.Field>
                <Link to="/esqueci-senha" >Esqueci minha senha de acesso!</Link>
                </Form.Field>
                <Button type='submit'>Acessar</Button>
            </Form>
        </div>
    )
}

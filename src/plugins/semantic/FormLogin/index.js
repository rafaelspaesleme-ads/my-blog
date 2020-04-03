import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import api from "../../../services/apiLogin"
import { login } from "../../../services/auth"

class FormLogin extends Component {

    state = {
        usuario: "",
        senha: "",
        error: "",
        success: ""
    };

    handleSignIn = async e => {
        e.preventDefault();
        const { usuario, senha } = this.state;
        if (!usuario || !senha) {
          this.setState({ error: "Preencha o usuário e senha para continuar!" });
        } else {
          try {
            const response = await api.post("/login", { usuario, senha });
            login(response.data);
            this.setState({success: "Login realizado com sucesso!"})
            this.props.history.push("/kwlc-dashboard");
          } catch (err) {
            this.setState({
              error:
                "Houve um problema com o login, verifique suas credenciais!"
            });
          }
        }
      };    

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSignIn} >
                    {this.state.success && <p>{this.state.success}</p>}
                    {this.state.error && <p>{this.state.error}</p>}
                    <Form.Field>
                    <label>Usuário/Email: </label>
                    <input 
                        placeholder='Digite seu username ou e-mail de acesso' 
                        onChange={e => this.setState({ usuario: e.target.value })}
                    />
                    </Form.Field>
                    <Form.Field>
                    <label color={'yellow'} >Senha: </label>
                    <input type="password" 
                        placeholder='Digite sua senha de acesso' 
                        onChange={e => this.setState({ senha: e.target.value })}
                    />
                    </Form.Field>
                    <Form.Field>
                    <Link to="/esqueci-senha" >Esqueci minha senha de acesso!</Link>
                    </Form.Field>
                    <Button type='submit' >Acessar</Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(FormLogin)

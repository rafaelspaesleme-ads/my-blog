import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
} from 'semantic-ui-react'

import './style.css'

import api from '../../../services/apiPrivate'

const options = [
  { key: 'tel', text: 'Telefone', value: 'tel' },
  { key: 'wha', text: 'Whatsapp', value: 'whats' },
  { key: 'mai', text: 'Email', value: 'mail' },
  { key: 'sit', text: 'Site', value: 'site' },
  { key: 'ins', text: 'Instagram', value: 'insta' },
  { key: 'fac', text: 'Facebook', value: 'face' },
  { key: 'lnk', text: 'LinkedIn', value: 'linked' },
  { key: 'twt', text: 'Twitter', value: 'twitter' },
  { key: 'hts', text: 'https', value: 'https' },
  { key: 'htt', text: 'http', value: 'http' }
]

class ContactForm extends Component {
  state = {
    title: '',
    address: '',
    nameSemanticIcon: '',
    typeContact: '',
    active: true,
    fail: '',
    success: '',
    auth: ''
  }

  componentDidMount() {

  }

  cleanAttributes() {
    this.setState({
      title: '',
      address: '',
      nameSemanticIcon: '',
      typeContact: '',
    })
  }

  handleSetContact = async e => {
    const contactDTO = {
      title: this.state.title,
      address: this.state.address,
      nameSemanticIcon: this.state.nameSemanticIcon,
      typeContact: this.state.typeContact,
      active: this.state.active
    }
    e.preventDefault();
    const { title, address } = this.state;
    if (!title && !address) {
      this.setState({fail: "Preencha os campos obrigatorios!"})
    } else {
        await api.post("/contato/salvar", contactDTO)
          .then((response) => {
            this.setState({success: "Contato cadastrado com sucesso!"})
          })
          .catch((error) => {
            this.setState({fail: "Erro ao realizar cadastro deste contato!"})
          })
          this.cleanAttributes();
    }
  }

  render() {
    return (
      <Form className="main-article-create" onSubmit={this.handleSetContact} >
            {this.state.success && <p>{this.state.success}</p>}
            {this.state.error && <p>{this.state.error}</p>}
            <Form.Field className="form-field-article"
                label='Titulo do contato'
            />
              <input
                placeholder='Escreva o titulo do contato'
                onChange={e => this.setState({ title: e.target.value })}
              />
            <Form.Field className="form-field-article"
                label='Endereço do contato'
            />
              <input
                placeholder='Escreva o endereço do contato. Ex. phone: +55 <seunumero>'
                onChange={e => this.setState({ address: e.target.value })}
              />
            <Form.Field className="form-field-article"
                label='Icone de contato'
            />
              <input
                placeholder='Escreva o icone do contato'
                onChange={e => this.setState({ nameSemanticIcon: e.target.value })}
              />
            <Form.Field className="form-field-article"
              label='Tipo de contato'
            />
            <select id="autor" placeholder='Selecione o tipo de contato' onChange={e => this.setState({ typeContact: e.target.value })} >
              {
                options.map(function(option) {
                  return (
                    <option key={option.key} value={option.text} required >{option.text}</option>
                  );
                })
              }
            </select>
            <Form.Field className="form-field-article"
              control={Button}>
                Inserir
            </Form.Field>
      </Form>
    )
  }
}

export default ContactForm
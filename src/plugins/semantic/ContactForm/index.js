import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
} from 'semantic-ui-react'

import './style.css'

const options = [
  { key: 't', text: 'Telefone', value: 'tel' },
  { key: 'w', text: 'WhatsApp', value: 'whats' },
  { key: 'e', text: 'Email', value: 'mail' },
  { key: 's', text: 'Site', value: 'site' },
  { key: 'r', text: 'Rede Social', value: 'social' },
]

class ContactForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render(props) {
    const { value } = this.state
    return (
      <Form className="main-article-create" >
            <Form.Field
                control={Input}
                label='Titulo do contato'
                placeholder='Escreva o titulo deste contato'
            />
            <Form.Field
                control={Input}
                label='Endereço do contato'
                placeholder='Escreva o endereço de contato'
            />
            <Form.Field
                control={Input}
                label='Icone de contato'
                placeholder='Escreva o nome semantic icon para este contato'
            />
            <Form.Select
              fluid
              label='Tipo de contato'
              options={options}
              placeholder='Selecione o tipo de contato'
            />
            <Form.Field control={Button}>
                Inserir
            </Form.Field>
      </Form>
    )
  }
}

export default ContactForm
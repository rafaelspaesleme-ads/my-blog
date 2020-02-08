import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import ImageAvatar from './../ImageAvatar';

import './style.css'

const options = [
  { key: 'ti', text: 'Técnico em Informática', value: 'ti' },
  { key: 'ads', text: 'Analista de Sistemas', value: 'ads' },
  { key: 'devfront', text: 'Front-end Developer', value: 'devfront' },
  { key: 'devback', text: 'Back-end Developer', value: 'devback' },
  { key: 'devfull', text: 'FullStack Developer', value: 'devfull' },
  { key: 'suptec', text: 'Suporte Técnico', value: 'suptec' },
  { key: 'outher', text: 'Outros', value: 'outher' },
]

class FormFollower extends Component {

    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <div>
                <Form>
                    <div id="main-avatar">
                        <ImageAvatar
                        imageUrlAvatar={"https://cdn.pixabay.com/photo/2013/07/12/14/36/blue-148582_960_720.png"} 
                        sizeImageAvatar={"tiny"}
                        />
                    </div>
                    <Form.Group widths='equal'>
                    <Form.Input fluid label='Nome' placeholder='Digite seu nome' />
                    <Form.Input fluid label='Sobrenome' placeholder='Digite seu sobrenome' />
                    <Form.Select
                        fluid
                        label='Profissão'
                        options={options}
                        placeholder='Selecione'
                    />
                    </Form.Group>
                    <Form.Group>
                    <Form.Input type="email" fluid label='Email' placeholder='Digite seu email' />
                    <Form.Input type="tel" fluid label='WhatsApp' placeholder='Digite seu Whatsapp' />
                    <Form.Input fluid label='Instagram' placeholder='Digite seu instagram' />
                    <Form.Input fluid label='Github' placeholder='Digite seu github' />
                    <Form.Input type="file" fluid label='Avatar' placeholder='Escolha uma imagem para ser seu avatar' />
                    </Form.Group>
                    <Form.TextArea label='Sobre mim' placeholder='Fale um pouco sobre você' />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

export default FormFollower
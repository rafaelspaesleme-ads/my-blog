import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

import './style.css'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class ArticleForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render(props) {
    const { value } = this.state
    return (
      <Form className="main-article-create" >
            <Form.Field
                control={Input}
                label='Titulo do artigo'
                placeholder='Escreva o titulo do artigo'
            />
            <Form.Field
                control={Input}
                label='Subtitulo do artigo'
                placeholder='Escreva o subtitulo do artigo'
            />
            <Form.Field
                control={TextArea}
                label='Conteudo do artigo'
                placeholder='O que tem a dizer neste novo artigo? ...'
            />
            <Form.Field control={Button}>
                Postar
            </Form.Field>
      </Form>
    )
  }
}

export default ArticleForm
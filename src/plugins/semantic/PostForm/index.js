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

class PostForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render(props) {
    const { value } = this.state
    return (
      <Form className="main-post-create" >
            <Form.Field
                control={Input}
                label='Titulo do post'
                placeholder='Escreva o titulo do post'
            />
            <Form.Field
                control={TextArea}
                label='Conteudo do post'
                placeholder='O que tem a dizer neste novo post? ...'
            />
            <Form.Field control={Button}>
                Postar
            </Form.Field>
      </Form>
    )
  }
}

export default PostForm
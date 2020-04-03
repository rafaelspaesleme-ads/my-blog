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

import api from '../../../services/apiPrivate'

import './style.css'


const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class ArticleForm extends Component {
  state = {
    urlImage: '',
    title: '',
    subTitle: '',
    description: '',
    text: '',
    active: true,
    fail: '',
    success: '',
    auth: ''
  }

  componentDidMount() {
    
  }

  cleanAttributes() {
    this.setState({
      urlImage: '',
      title: '',
      subTitle: '',
      description: '',
      text: '',
    })
  }

  handleSetArticle = async e => {
    const articleDTO = {
      urlImage: this.state.urlImage,
      title: this.state.title,
      subTitle: this.state.subTitle,
      description: this.state.description,
      text: this.state.text,
      active: this.state.active,
    }
    e.preventDefault();
    const { urlImage, title, text } = this.state;
    if (!urlImage && !title && !text) {
      this.setState({fail: "Preencha os campos obrigatorios!"})
    } else {
        await api.post("/artigo/salvar", articleDTO)
          .then((response) => {
            this.setState({success: "Artigo postado com sucesso!"})
          })
          .catch((error) => {
            this.setState({fail: "Erro ao realizar postagem deste artigo!"})
          })
          this.cleanAttributes();
    }
  }

  render() {
    return (
      <Form className="main-article-create" onSubmit={this.handleSetArticle} >
            {this.state.success && <p>{this.state.success}</p>}
            {this.state.error && <p>{this.state.error}</p>}
            <Form.Field className="form-field-article"
              label='Titulo do Artigo'
            />
              <input
                placeholder='Escreva o titulo do artigo'
                onChange={e => this.setState({ title: e.target.value })}
              />
            <Form.Field className="form-field-article"
              label='Url de Imagem'
            />
              <input
                placeholder='Insira uma url de referencia ao artigo. Ex.: https://host/image.png'
                onChange={e => this.setState({ urlImage: e.target.value })}
              />
            <Form.Field className="form-field-article"
                label='Subtitulo do artigo' 
            />
              <input 
                placeholder='Escreva o subtitulo do artigo' 
                onChange={e => this.setState({ subTitle: e.target.value })}
              />
            <Form.Field className="form-field-article"
                label='Descrição do artigo' 
            />
              <input 
                placeholder='Escreva a descrição do artigo' 
                onChange={e => this.setState({ description: e.target.value })}
              />
            <Form.Field className="form-field-article"
                label='Conteudo do artigo'
            />
            <textarea 
              placeholder='O que tem a dizer neste novo artigo? ...'
              onChange={e => this.setState({ text: e.target.value })}
            />
            <Form.Field className="form-field-article button-save"
              control={Button}>
                Postar
            </Form.Field>
      </Form>
    )
  }
}

export default ArticleForm
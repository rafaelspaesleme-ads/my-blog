import React, { useState } from 'react'
import {
  Button,
  Form,
  Input,
  TextArea,
} from 'semantic-ui-react'
import api from '../../../services/apiPrivate'
import './style.css'

export default function PostForm() {
  const [title, setTitle]= useState('');
  const [subTitle, setSubTitle]= useState('');
  const [description, setDescription]= useState('');
  const [text, setText]= useState('');
  const [active, setactive]= useState(true);

  async function handleSetPost(e) {
    e.preventDefault();
    
    const data ={
      title,
      subTitle,
      description,
      text,
      active
    };

    try {
      const response = await api.post('/postagem/salvar', data);
      console.log(response);
      alert(`Postagem realizada com sucesso!\nStatus: ${response.status}`)
    } catch(err){
      alert(`Erro ao cadastrar post.\nInfo: ${err}`)
    }
  }

    return (
      <Form className="main-post-create" onSubmit={handleSetPost} >
            <Input className="main-input" 
                control={Input}
                label='Titulo do post'
                placeholder='Escreva o titulo do post'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <Input className="main-input" 
                control={Input}
                label='Subtitulo do post'
                placeholder='Escreva o subtitulo do post'
                value={subTitle}
                onChange={e => setSubTitle(e.target.value)}
            />
            <TextArea className="main-text-area" 
                label='Descrição do post'
                placeholder='Descreve a intenção deste post...'
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <TextArea className="main-text-area" 
                label='Conteudo do post'
                placeholder='O que tem a dizer neste novo post? ...'
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <Button 
              className="main-button-save"
              type="submit"
            >
                Postar
            </Button>
      </Form>
    )
}
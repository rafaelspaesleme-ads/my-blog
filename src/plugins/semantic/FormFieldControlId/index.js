import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import './style.css'

const optionsGit = [
  { key: 'gh', text: 'GitHub', value: 'github' },
  { key: 'bb', text: 'BitBucket', value: 'bitbucket' },
  { key: 'gl', text: 'GitLab', value: 'gitlab' },
]

const optionsLang = [
  { key: 'j', text: 'Java', value: 'java' },
  { key: 'js', text: 'JavaScript', value: 'javascript' },
  { key: 'p', text: 'Python', value: 'python' },
]

const FormFieldControlId = () => (
  <Form className="main-form-field">
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='Nome'
        placeholder='Escreva o nome do repositorio'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Profile git'
        placeholder='Escreva seu nome de profile git remoto'
      />
      <Form.Field
        control={Select}
        options={optionsGit}
        label={{ children: 'Remote Git', htmlFor: 'form-select-control-gender' }}
        placeholder='Selecione seu dominio remoto git'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
      <Form.Field
        control={Select}
        options={optionsLang}
        label={{ children: 'Linguagem', htmlFor: 'form-select-control-gender' }}
        placeholder='Selecione a linguagem'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Descrição'
      placeholder='Escreva a descrição deste projeto'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Salvar'
    />
  </Form>
)

export default FormFieldControlId
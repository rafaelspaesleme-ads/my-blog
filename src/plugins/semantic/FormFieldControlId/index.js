import React, { useState } from 'react'
import { Form, Input, TextArea, Button, Radio, Label } from 'semantic-ui-react'
import './style.css'
import api from '../../../services/apiPrivate'

export default function FormFieldControlId() {
  const [title, setTitle]= useState('');
  const [description, setDescription] = useState('');
  const [urlRepository, setUrlRepository] = useState('');
  const [domainGit, setDomainGit] = useState('');
  const [active, setActive] = useState(true);
  const [usernameGit, setUsernameGit] = useState('');
  const [programmingLanguage, setProgrammingLanguage] = useState('');
  const [strBranches, setStrBranches] = useState('');
  const [strContributors, setStrContributors] = useState('');
  
  async function handleSetRepository(e) {
    e.preventDefault();

    const listBranches = [];
    const listContributors = [];

    strBranches.split(',').forEach((branch) => {
      listBranches.push({
        name: branch,
        active: true
      })
    })

    strContributors.split(',').forEach((branch) => {
      listContributors.push({
        usernameGit: branch,
        active: true
      })
    })

    const data = {
      title,
      description,
      branches: listBranches,
      contributors: listContributors,
      urlRepository,
      domainGit,
      active,
      usernameGit,
      programmingLanguage
    }


    try {
      const response = await api.post('/repositorio/salvar', data);
      alert(`Repositório cadastrado com sucesso!\nStatus: ${response.status}`)
    } catch(err){
      alert(`Erro ao cadastrar repositório.\nInfo: ${err}`)
    }
  }

  return (
  <Form className="main-form-field" onSubmit={handleSetRepository}>
      <Input
        className='form-input-control-first-name'
        label='Repositorio'
        placeholder='Escreva o nome do repositorio'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Input
        className='form-input-control-first-name'
        label='Descrição'
        placeholder='Coloque a descrição deste repositório'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <TextArea
        className='form-input-control-first-name'
        placeholder='Insira as branches do projeto, separando-os por virgula.'
        value={strBranches}
        onChange={e => setStrBranches(e.target.value)}
      />
      <TextArea
        className='form-input-control-first-name'
        placeholder='Insira os colaboradores do projeto, separando-os por virgula.'
        value={strContributors}
        onChange={e => setStrContributors(e.target.value)}
      />
      <Input
        className='form-textarea-control-opinion'
        label='Url Repositório'
        placeholder='Digite a url deste repositório'
        value={urlRepository}
        onChange={e => setUrlRepository(e.target.value)}
      />
    
    <div className='div-radio-repo' >
      <Label>Escolha seu dominio git</Label>
      <Radio
          className='radio-repo'
          label='GitHub'
          name='radioGroup'
          value='github'
          checked={domainGit === 'github'}
          onChange={e => setDomainGit('github')}
      />
      <Radio
          className='radio-repo'
          label='BitBucket'
          name='radioGroup'
          value='bitbucket'
          checked={domainGit === 'bitbucket'}
          onChange={e => setDomainGit('bitbucket')}
      />
      <Radio
          className='radio-repo'
          label='GitLab'
          name='radioGroup'
          value='gitlab'
          checked={domainGit === 'gitlab'}
          onChange={e => setDomainGit('gitlab')}
      />

      <Radio
          className='radio-repo'
          label='Outros'
          name='radioGroup'
          value='outro'
          checked={domainGit === 'outro'}
          onChange={e => setDomainGit('outro')}
      />
    </div>

    <Input
        className='form-textarea-control-opinion'
        label='Username Git'
        placeholder='Digite o username git'
        value={usernameGit}
        onChange={e => setUsernameGit(e.target.value)}
    />
    <Input
        className='form-textarea-control-opinion'
        label='Linguagem de desenvolvimento'
        placeholder='Java? C? C#? Digite a linguagem deste projeto...'
        value={programmingLanguage}
        onChange={e => setProgrammingLanguage(e.target.value)}
    />

    <Button
      className='form-button-control-public'
      type='submit'
      content='Salvar'
    />
  </Form>
)
}
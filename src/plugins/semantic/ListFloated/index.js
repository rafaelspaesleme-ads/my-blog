import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'
import './style.css'

const ListFloated = (props) => (
  <List className="main-list-float" divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button color="red" >Excluir</Button>
        <Button color="yellow" >Desativar</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
      <List.Content>Lena</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button color="red" >Excluir</Button>
        <Button color="yellow" >Desativar</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
      <List.Content>Lindsay</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button color="red" >Excluir</Button>
        <Button color="yellow" >Desativar</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
      <List.Content>Mark</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button color="red" >Excluir</Button>
        <Button color="yellow" >Desativar</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
      <List.Content>Molly</List.Content>
    </List.Item>
  </List>
)

export default ListFloated
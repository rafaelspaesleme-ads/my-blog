import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'
import './style.css'

const ListFloated = (props) => (
  <List className="main-list-float" divided verticalAlign='middle'>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
      <List.Content>Lena</List.Content>
      <List.Content>
        <Button className="button-list-float" color="red" >Excluir</Button>
        <Button className="button-list-float" color="yellow" >Desativar</Button>
      </List.Content>
    </List.Item>
  </List>
)

export default ListFloated
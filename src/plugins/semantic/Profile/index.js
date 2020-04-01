import React from 'react'
import { Grid,  Card, Image, Container, List } from 'semantic-ui-react'
import './style.css';

const Avatar = () => (
    <Card id="main-card-profile">
      <Image src='https://avatars3.githubusercontent.com/u/11760799?v=4' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Rafael Paes Leme</Card.Header>
        <Card.Meta>
          <span className='date'>FullStack - Developer</span>
        </Card.Meta>
        <Card.Description>
          Há 10 anos trabalhando com TI.
        </Card.Description>
      </Card.Content>
    </Card>
  )

  const About = () => (
    <Container id="main-container-profile">
        <strong>Sobre mim</strong>
        <hr/>
        <br></br>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
      </p>
    </Container>
  )

  const Contacts = () => (
    <div id="main-div-profile">
        <strong>Meus contatos</strong>
        <List id="main-list-profile" divided relaxed>
        <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
            <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
            <List.Description as='a'>Updated 10 mins ago</List.Description>
            </List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
            <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
            <List.Description as='a'>Updated 22 mins ago</List.Description>
            </List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
            <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
            <List.Description as='a'>Updated 34 mins ago</List.Description>
            </List.Content>
        </List.Item>
        </List>
    </div>
  )

export default function Profile() {
    return (
        <div id="main-grid-profile">
            <strong>Meu perfil</strong>
            <Grid>
                <Grid.Column width={4}>
                <Avatar />
                </Grid.Column>
                <Grid.Column width={9}>
                <About />
                </Grid.Column>
                <Grid.Column width={3}>
                <Contacts />
                </Grid.Column>
            </Grid>
        </div>
    )
}

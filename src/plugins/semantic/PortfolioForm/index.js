import React, { Component } from 'react';
import { Dropdown, Input, Table, Segment, Button, Grid } from 'semantic-ui-react'
import './style.css'

// import { Container } from './styles';

export default class PortfolioForm extends Component {
    state = { log: [], formations: '', courses: '', activePage: 0 }

    handleInputChange = (e, { value }) => this.setState({ activePage: value })

    handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

    setFormations(event) {
        this.setState({formations:event.target.value});
    }

    render() {
    const { activePage } = this.state
    const options = [
        { key: 'edit', icon: 'edit', value: 'edit' },
        { key: 'delete', icon: 'delete', value: 'delete' },
    ]
    return (
        <Grid className="main-grid">
            <Grid.Row className="main-grid-row">
                <Input className="main-input" label='Titulo' placeholder='Insira um titulo' />
                <Input className="main-input" label='Subtitulo' placeholder='Insira um subtitulo' />
                <Input className="main-input" label='Trabalho' placeholder='Insira seu trabalho atual' />
            </Grid.Row>

            <Grid.Row className="main-grid-row">
                <Input className="main-input" label='api.whatsapp' placeholder='Insira seu número whatsapp' icon='whatsapp' />
                <Input className="main-input" label='mailto:' placeholder='Insira seu email' icon='mail' />
                <Input className="main-input" label='tel:' placeholder='Insira seu telefone' icon='teletype' />
            </Grid.Row>

            <Grid.Row className="main-grid-row">
                <Input className="main-input" label='http(s)://' placeholder='Insira seu github' icon='github' />
                <Input className="main-input" label='http(s)://' placeholder='Insira seu linkedin' icon='linkedin' />
                <Input className="main-input" label='http(s)://' placeholder='Insira seu twitter' icon='twitter' />
                <Input className="main-input" label='http(s)://' placeholder='Insira seu canal' icon='youtube' />
                <Input className="main-input" label='http(s)://' placeholder='Insira seu instagram' icon='instagram' />
                <Input className="main-input" label='http(s)://' placeholder='Insira seu site' icon='html5' />
                <Input className="main-input" label='http(s)://' placeholder='Insira seu podcast' icon='sound' />
            </Grid.Row>

            <Grid.Row className="main-grid-row main-subgrid-row">
                <Grid.Row>
                    <Grid.Column className="main-grid-col">
                        <Input 
                            action={{ icon: 'student', labelPosition: 'right', content: 'Inserir' }}
                            className="main-input-formation"
                            label='Formação' 
                            placeholder='Insira suas formações' 
                            value={this.state.formations}
                            onChange={this.setFormations}                
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="main-grid-row-segment">
                    <Segment.Group className="main-segment-group-formation">
                        <Segment clearing className="main-segment-native">
                            Top 
                                <Dropdown
                                    icon="block layout"
                                    className="button icon main-button-segment"
                                    floating
                                    options={options}
                                    trigger={<React.Fragment />}
                                />
                        </Segment>
                        <Segment clearing className="main-segment-native" >
                            Middle
                                <Dropdown
                                    icon="block layout"
                                    className="button icon main-button-segment"
                                    floating
                                    options={options}
                                    trigger={<React.Fragment />}
                                />
                        </Segment>
                        <Segment clearing className="main-segment-native" >
                            Bottom
                                <Dropdown
                                    icon="block layout"
                                    className="button icon main-button-segment"
                                    floating
                                    options={options}
                                    trigger={<React.Fragment />}
                                />
                        </Segment>
                    </Segment.Group>
                </Grid.Row>
            </Grid.Row>

            <Grid.Row className="main-grid-row main-subgrid-row">
                <Grid.Row>
                    <Grid.Column className="main-grid-col">
                        <Input 
                            action={{ icon: 'student', labelPosition: 'right', content: 'Inserir' }}
                            className="main-input-formation"
                            label='Cursos' 
                            placeholder='Insira seus cursos' 
                            value={this.state.formations}
                            onChange={this.setFormations}                
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="main-grid-row-segment">
                    <Segment.Group className="main-segment-group-formation">
                        <Segment clearing className="main-segment-native">
                            Top 
                                <Dropdown
                                    icon="block layout"
                                    className="button icon main-button-segment"
                                    floating
                                    options={options}
                                    trigger={<React.Fragment />}
                                />
                        </Segment>
                        <Segment clearing className="main-segment-native" >
                            Middle
                                <Dropdown
                                    icon="block layout"
                                    className="button icon main-button-segment"
                                    floating
                                    options={options}
                                    trigger={<React.Fragment />}
                                />
                        </Segment>
                        <Segment clearing className="main-segment-native" >
                            Bottom
                                <Dropdown
                                    icon="block layout"
                                    className="button icon main-button-segment"
                                    floating
                                    options={options}
                                    trigger={<React.Fragment />}
                                />
                        </Segment>
                    </Segment.Group>
                </Grid.Row>
            </Grid.Row>

            <Grid.Row className="main-grid-row main-subgrid-row">
                <Grid.Row>
                    <Grid.Column className="main-grid-col">
                        <Input 
                            action={{ icon: 'trophy', labelPosition: 'right', content: 'Inserir' }}
                            className="main-input-formation"
                            label='Conhecimentos' 
                            placeholder='Insira seus cpnhecimentos' 
                            value={this.state.formations}
                            onChange={this.setFormations}                
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="main-subgrid-row">
                    <Grid.Column className="main-grid-col-nivel">
                        <Input
                        className="main-input-nivel"
                            label={`Nivel: ${activePage}`}  
                            min={0}
                            max={100}
                            onChange={this.handleInputChange}
                            type='range'
                            value={activePage}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="main-subgrid-row">
                <Table basic='very' className="main-segment-group-cient">
                    <Table.Header>
                    <Table.Row className="main-table-row-header">
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Notes</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row className="main-table-body-row">
                            <Table.Cell>John</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell>None</Table.Cell>
                        </Table.Row>
                        <Table.Row className="main-table-body-row">
                            <Table.Cell>Jamie</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell>Requires call</Table.Cell>
                        </Table.Row>
                        <Table.Row className="main-table-body-row">
                            <Table.Cell>Jill</Table.Cell>
                            <Table.Cell>Denied</Table.Cell>
                            <Table.Cell>None</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                </Grid.Row>
            </Grid.Row>
            <Grid.Row>
                <Button className="main-button-save" >Salvar</Button>
            </Grid.Row>
        </Grid>
    );
  }
}

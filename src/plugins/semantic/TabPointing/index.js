import React from 'react';
import { Tab } from 'semantic-ui-react'
import './style.css'

// import { Container } from './styles';

export default function TabPointing(props) {
  const panes = [
    {
      menuItem: 'Meus Posts',
      render: () => (
        <Tab.Pane className="item-tab-pane" attached={false}>
          {props.contentPost}
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Meus Artigos',
      render: () => (
        <Tab.Pane className="item-tab-pane" attached={false}>
          {props.contentArticles}
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Meus Portfólios',
      render: () => (
        <Tab.Pane className="item-tab-pane" attached={false}>
          {props.contentPortfolios}
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Meus Repositorios',
      render: () => (
        <Tab.Pane className="item-tab-pane" attached={false}>
          {props.contentRepositories}
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Contatos',
      render: () => (
        <Tab.Pane className="item-tab-pane" attached={false}>
          {props.contentContact}
        </Tab.Pane>
      ),
    },
    /**{
      menuItem: 'Fórum',
      render: () => (
        <Tab.Pane className="item-tab-pane" attached={false}>
          {props.contentForum}
        </Tab.Pane>
      ),
    },*/
  ]

  return (
    <Tab className="item-tab" menu={{ pointing: false }} panes={panes} />
  );
}
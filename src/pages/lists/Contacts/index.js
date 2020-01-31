import React, { Component } from 'react';
import ListDivided from '../../../plugins/semantic/ListDivided';
import api from './../../../services/api';
import { prevPage } from './../utils/prevPage';
import { nextPage } from './../utils/nextPage';
import LayoutList from './../utils/LayoutList';

export default class Contacts extends Component {

  state = {
    contacts: [],
    contactsInfo: {},
    page: 1
  }

  componentDidMount() {
    this.loadContacts();
  }

  loadContacts = async (page = 1) => {
    const response = await api.get(`/contatos/lista/situacao/${true}?page=${page}`);

    const { ...contactsInfo } = response.data;

    this.setState({contacts: contactsInfo, page })
  }

  render() {

    const { contacts, page, contactsInfo } = this.state;

    return (
      <LayoutList 
      titleLayoutList={'MEUS CONTATOS'} 
      subTitleLayoutList={`Atualmente tenho ${this.state.contacts.length} formas de contato.`} 
      contentLayoutList={
        contacts.map(contact => (
          <ListDivided key={contact.id}
            linkListDivided={contact.urlContato} 
            iconListDivided={contact.urlIconContato} 
            titleListDivided={contact.title} 
            descriptionListDivided={contact.description}
        />
        ))
      } 
      logicalPrevLayoutList={page === 1} 
      clickPrevLayoutList={prevPage} 
      logicalNextLayoutList={page === contactsInfo.pages} 
      clickNextLayoutList={nextPage}
    />
    );
  }
}


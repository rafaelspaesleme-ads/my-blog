import React, { Component } from 'react';
import ListDivided from '../../../plugins/semantic/ListDivided';
import api from './../../../services/api';
import { prevPage } from './../utils/prevPage';
import { nextPage } from './../utils/nextPage';
import LayoutList from './../utils/LayoutList';

const direction = ['DESC','ASC']
var countContatos = 0;

export default class Contacts extends Component {

  state = {
    contacts: [],
    contactsInfo: {},
    page: 0
  }

  componentDidMount() {
    this.loadContacts();
  }

  loadContacts = async (page = 0) => {
    const response = await api.get(`/contato/buscar/ativo/true?page=${page}&size=5&orderBy=datePost&direction=${direction[0]}`);
    countContatos = response.data.totalElements;
    const { content, ...contactsInfo } = response.data;
    this.setState({contacts: content, contactsInfo, page })
  }

  prevPage = () => {
    const { page, contactsInfo } = this.state;

    if(page === 0) return;

    const pageNumber = page - 1;

    this.loadContacts(pageNumber)
  }

  nextPage = () => {
    const { page, contactsInfo } = this.state;

    if (page === contactsInfo.pages) return;

    const pageNumber = page + 1;

    this.loadContacts(pageNumber);
  }

  render() {

    const { contacts, page, contactsInfo } = this.state;
    const countCurrentContatos = this.state.contacts.length;
    return (
      <LayoutList 
      titleLayoutList={'MEUS CONTATOS'} 
      subTitleLayoutList={`Atualmente tenho ${countCurrentContatos} formas de contato.`} 
      descriptionLayoutList={`Pagina: ${page+1} / contatos na pagina: ${countCurrentContatos} de ${countContatos}`}
      contentLayoutList={
        contacts.map(contact => (
          <ListDivided key={contact.id}
            linkListDivided={
              contact.typeContact.includes('Whatsapp')
              ? `https://api.whatsapp.com/send?phone=${contact.address}` 
              : contact.typeContact.includes('Tel') || contact.typeContact.includes('Cel')
              ? `tel:${contact.address}` 
              : contact.typeContact.includes('mail') 
              ? `mailto:${contact.address}` 
              : contact.typeContact.includes('Instagram') 
              ? `https://instagram.com/${contact.address}` 
              : contact.typeContact.includes('Facebook') 
              ? `https://facebook.com/${contact.address}` 
              : contact.typeContact.includes('Linked') 
              ? `https://br.linkedin.com/in/${contact.address}` 
              : contact.typeContact.includes('Twitter') 
              ? `https://twitter.com/${contact.address}` 
              : contact.typeContact.includes('https') 
              ? `https://${contact.address}` 
              : `http://${contact.address}`
            } 
            iconListDivided={contact.nameSemanticIcon} 
            titleListDivided={contact.address} 
            descriptionListDivided={contact.description}
        />
        ))
      } 
      logicalPrevLayoutList={page === 0} 
      clickPrevLayoutList={this.prevPage} 
      logicalNextLayoutList={page === contactsInfo.pages} 
      clickNextLayoutList={this.nextPage}
    />
    );
  }
}


import React, { Component } from 'react';
import ListDivided from '../../../plugins/semantic/ListDivided';
import api from './../../../services/api';
import { prevPage } from './../utils/prevPage';
import { nextPage } from './../utils/nextPage';
import LayoutList from './../utils/LayoutList';

const direction = ['DESC','ASC']
var countRepositories = 0;


export default class Repositories extends Component {

  state = {
    repositories: [],
    repositoriesInfo: {},
    page: 0
  }

  componentDidMount() {
      this.loadRepository();
  }

  loadRepository = async (page = 0) => {
    const response = await api.get(`/repositorio/buscar/ativo/true?page=${page}&size=5&orderBy=datePost&direction=${direction[0]}`);

    countRepositories = response.data.totalElements;
    const { content, ...repositoriesInfo } = response.data;

    this.setState({ repositories: content, repositoriesInfo, page });
  }

  prevPage = () => {
    const { page, repositoriesInfo } = this.state;

    if(page === 0) return;

    const pageNumber = page - 1;

    this.loadRepository(pageNumber)
  }

  nextPage = () => {
    const { page, repositoriesInfo } = this.state;

    if (page === repositoriesInfo.pages) return;

    const pageNumber = page + 1;

    this.loadRepository(pageNumber);
  }

  render() {
    const { repositories, page, repositoriesInfo } = this.state;

    return (
      <LayoutList 
        titleLayoutList={'MEUS PROJETOS'} 
        subTitleLayoutList={`Atualmente tenho ${this.state.repositories.length} projetos desenvolvidos.`} 
        contentLayoutList={
          repositories.map(repository => (
            <ListDivided key={repository.id}
              linkListDivided={repository.urlRepository} 
              iconListDivided={
                repository.domainGit.includes('github') 
                ? 'github' 
                : repository.domainGit.includes('bitbucket') 
                ? 'bitbucket' 
                : repository.domainGit.includes('gitlab') 
                ? 'gitlab'
                : 'git square'
              } 
              titleListDivided={repository.title} 
              descriptionListDivided={repository.description}
            />
          ))
        } 
        logicalPrevLayoutList={page === 0} 
        clickPrevLayoutList={this.prevPage} 
        logicalNextLayoutList={page === repositoriesInfo.pages} 
        clickNextLayoutList={this.nextPage}
      />
    );
  }
}



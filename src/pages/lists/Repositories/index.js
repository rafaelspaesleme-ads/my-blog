import React, { Component } from 'react';
import ListDivided from '../../../plugins/semantic/ListDivided';
import api from './../../../services/api';
import { prevPage } from './../utils/prevPage';
import { nextPage } from './../utils/nextPage';
import LayoutList from './../utils/LayoutList';

// import { Container } from './styles';

export default class Repositories extends Component {

  state = {
    repositories: [],
    repositoriesInfo: {},
    page: 1
  }

  componentDidMount() {

  }

  loadRepository = async (page = 1) => {
    const response = await api.get(`/repository/lista/situacao/${true}?page=${page}`);

    const { ...repositoriesInfo } = response.data;

    this.setState({ repositories: repositoriesInfo, page });
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
              linkListDivided={repository.linkProject} 
              iconListDivided={repository.iconProject} 
              titleListDivided={repository.titleProject} 
              descriptionListDivided={repository.descriptionProject}
            />
          ))
        } 
        logicalPrevLayoutList={page === 1} 
        clickPrevLayoutList={prevPage} 
        logicalNextLayoutList={page === repositoriesInfo.pages} 
        clickNextLayoutList={nextPage}
      />
    );
  }
}



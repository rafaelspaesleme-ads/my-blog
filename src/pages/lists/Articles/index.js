import React, { Component } from 'react';
import CardCardProps from '../../../plugins/semantic/CardCardProps';
import api from './../../../services/api';
import { prevPage } from './../utils/prevPage';
import { nextPage } from './../utils/nextPage';
import LayoutList from './../utils/LayoutList';

var date = null;
const direction = ['DESC','ASC']

export default class Articles extends Component {
  
  state = {
    articles: [],
    articlesInfo: {},
    page: 1
  }

  componentDidMount() {
    date = new Date();
    this.loadArticles();
  }

  loadArticles = async (page = 1) => {
    const response = await api.get(`/artigo/buscar/ativo/${true}?page=${page}?size=${20}?orderBy=${date.toString()}?direction=${direction[0]}`);

    const { ...articlesInfo } = response.data;

    this.setState({articles: articlesInfo, page })
  }

  render() {

    const { articles, page, articlesInfo } = this.state;

    return (
        <LayoutList 
          titleLayoutList={'MEUS ARTIGOS'} 
          subTitleLayoutList={`Atualmente tenho ${this.state.articles.length} publicados.`} 
          contentLayoutList={
            articles.map(article => (
              <CardCardProps className="content-article" key={article.id} 
                linkCardProps={`/artigo/${article.id}`} 
                imageCardProps={article.image} 
                titleCardProps={article.title} 
                subTitleCardProps={article.subTitle} 
                descriptionCardProps={article.description}
              />
            ))
          } 
          logicalPrevLayoutList={page === 1} 
          clickPrevLayoutList={prevPage} 
          logicalNextLayoutList={page === articlesInfo.pages} 
          clickNextLayoutList={nextPage}
        />
    );
  }
}
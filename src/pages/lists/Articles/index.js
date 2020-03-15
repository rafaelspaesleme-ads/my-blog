import React, { Component } from 'react';
import CardCardProps from '../../../plugins/semantic/CardCardProps';
import api from './../../../services/api';
import { prevPage } from './../utils/prevPage';
import { nextPage } from './../utils/nextPage';
import LayoutList from './../utils/LayoutList';

const direction = ['DESC','ASC']
var countArticles = 0;

export default class Articles extends Component {
  
  state = {
    articles: [],
    articlesInfo: {},
    page: 0
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = async (page = 0) => {
    const response = await api.get(`/artigo/buscar/ativo/true?page=${page}&size=5&orderBy=datePost&direction=${direction[0]}`);
    console.log(response);
    countArticles = response.data.totalElements;
    const { content, ...articlesInfo } = response.data;
    this.setState({articles: content, articlesInfo, page });
  }

  prevPage = () => {
    const { page, articlesInfo } = this.state;

    if(page === 0) return;

    const pageNumber = page - 1;

    this.loadArticles(pageNumber)
  }

  nextPage = () => {
    const { page, articlesInfo } = this.state;

    if (page === articlesInfo.pages) return;

    const pageNumber = page + 1;

    this.loadArticles(pageNumber);
  }

  render() {
    const { articles, page, articlesInfo } = this.state;

    const countCurrentArticles = this.state.articles.length;

    return (
        <LayoutList 
          titleLayoutList={'MEUS ARTIGOS'} 
          subTitleLayoutList={`Atualmente tenho ${countArticles} publicados.`} 
          descriptionLayoutList={`Pagina: ${page+1} / artigos na pagina: ${countCurrentArticles} de ${countArticles}`}
          contentLayoutList={
            articles.map(article => (
              <CardCardProps className="content-article" key={article.id} 
                linkCardProps={`/artigo/${article.id}`} 
                imageCardProps={article.urlImage} 
                titleCardProps={article.title} 
                subTitleCardProps={article.subTitle} 
                descriptionCardProps={article.description}
              />
            ))
          } 
          logicalPrevLayoutList={page === 0} 
          clickPrevLayoutList={this.prevPage} 
          logicalNextLayoutList={page === articlesInfo.pages} 
          clickNextLayoutList={this.nextPage}
        />
    );
  }
}
import React, { Component } from 'react';
import ProgressBar from '../../../plugins/semantic/ProgressBar'
import api from './../../../services/api';
import { prevPage } from './../utils/prevPage';
import { nextPage } from './../utils/nextPage';
import LayoutList from './../utils/LayoutList';
import { Icon } from 'semantic-ui-react';

const direction = ['DESC','ASC']
var countPortfolios = 0;

export default class Portfolios extends Component {

  state = {
    portfolios: [],
    portfoliosInfo: {},
    page: 0
  }

  componentDidMount() {
    this.loadPortfolios();
  }

  loadPortfolios = async (page = 0) => {
    const response = await api.get(`/portfolio/buscar/ativo/true?page=${page}&size=5&orderBy=datePost&direction=${direction[0]}`);
    console.log(response);
    countPortfolios = response.data.totalElements;
    const { content, ...portfoliosInfo } = response.data;
    this.setState({portfolios: content, portfoliosInfo, page })
  }

  prevPage = () => {
    const { page, portfoliosInfo } = this.state;

    if(page === 0) return;

    const pageNumber = page - 1;

    this.loadPortfolios(pageNumber)
  }

  nextPage = () => {
    const { page, portfoliosInfo } = this.state;

    if (page === portfoliosInfo.pages) return;

    const pageNumber = page + 1;

    this.loadPortfolios(pageNumber);
  }

  veriffyPercColor(event) {
    switch (event) {
      case event < 50:
        return 'red';
      case event = 50:
        return 'yellow';
      case event > 50 :
        return 'teal';
      default:
        return 'grey';
    }
  }

  render() {

    const { portfolios, page, portfoliosInfo } = this.state;

    return (
      <LayoutList 
        titleLayoutList={'MEU PORTFÓLIO'} 
        subTitleLayoutList={`Fique por dentro de todas as minhas qualificações, nas informações abaixo.`} 
        contentLayoutList={

          portfolios.map(portfolio => (
            <div>
              <ProgressBar key={portfolio.id}
                percentageProgress={portfolio.percentage} 
                titleProgress={portfolio.title}
                colorProgress={this.veriffyPercColor(portfolio.percentage)}
              />
              <hr/>
              <a href={portfolio.urlPortfolio}><Icon name='eye' />Visualizar</a>
            </div>
          ))
        } 
        logicalPrevLayoutList={page === 0} 
        clickPrevLayoutList={this.prevPage} 
        logicalNextLayoutList={page === portfoliosInfo.pages} 
        clickNextLayoutList={this.nextPage}
      />
    );
  }
}


import React, { Component } from 'react';
import ProgressBar from '../../../plugins/semantic/ProgressBar'
import api from './../../../services/api';
import { prevPage } from './../utils/prevPage';
import { nextPage } from './../utils/nextPage';
import LayoutList from './../utils/LayoutList';
import { Icon } from 'semantic-ui-react'

export default class Portfolios extends Component {

  state = {
    portfolios: [],
    portfoliosInfo: {},
    page: 1
  }

  componentDidMount() {
    this.loadPortfolios();
  }

  loadPortfolios = async (page = 1) => {
    const response = await api.get(`/portfolio/lista/situacao/${true}?page=${page}`);

    const { ...portfoliosInfo } = response.data;

    this.setState({portfolios: portfoliosInfo, page })
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
        subTitleLayoutList={`Atualmente tenho conhecimento em ${this.state.portfolios.length} tecnologias diferentes.`} 
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
        logicalPrevLayoutList={page === 1} 
        clickPrevLayoutList={prevPage} 
        logicalNextLayoutList={page === portfoliosInfo.pages} 
        clickNextLayoutList={nextPage}
      />
    );
  }
}


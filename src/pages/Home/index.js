import React, { Component } from 'react';
import TabPointing from './../../plugins/semantic/TabPointing'

import Articles from './../lists/Articles';
import Contacts from './../lists/Contacts';
import Forums from './../lists/Forums';
import Portfolios from './../lists/Portfolios';
import Posts from './../lists/Posts';
import Repositories from './../lists/Repositories';

export default class Home extends Component {

    state = {
        posts: [],
        articles: [],
        portfolios: [],
        repositories: [],
        contacts: [],
        forums: []
    }

  render() {
    return (
        <div>
            <TabPointing 
              contentPost={<Posts />} 
              contentArticles={<Articles />} 
              contentPortfolios={<Portfolios />} 
              contentRepositories={<Repositories />} 
              contentContact={<Contacts />} 
              contentForum={<Forums />} 
            />
        </div>
    );
  }
}

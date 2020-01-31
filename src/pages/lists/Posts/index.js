import React, { Component } from 'react';
import CardLinkCard from '../../../plugins/semantic/CardLinkCard';
import api from './../../../services/api';
import { prevPage } from './../utils/prevPage';
import { nextPage } from './../utils/nextPage';
import LayoutList from './../utils/LayoutList';


export default class Posts extends Component {

  state = {
    posts: [],
    postsInfo: {},
    page: 1
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async (page = 1) => {
    const response = await api.get(`/post/lista/situacao/${true}?page=${page}`);
    const { ...postsInfo } = response.data;

    this.setState({posts: postsInfo, page});
  }

  render() {
    const { posts, page, postsInfo } = this.state;

    return (
      <LayoutList 
        titleLayoutList={'MINHAS POSTAGENS'} 
        subTitleLayoutList={`Atualmente tenho ${this.state.posts.length} postagens publicadas.`} 
        contentLayoutList={
          posts.map(post => (
            <CardLinkCard key={post.id}
                linkCard={`/post/${post.id}`} 
                titleCard={post.title} 
                subTitleCard={post.subTitle} 
                descriptionCard={post.description}
            />
          ))
        } 
        logicalPrevLayoutList={page === 1} 
        clickPrevLayoutList={prevPage} 
        logicalNextLayoutList={page === postsInfo.pages} 
        clickNextLayoutList={nextPage}
      />        
    );
  }
}
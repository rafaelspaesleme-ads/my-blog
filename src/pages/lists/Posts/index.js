import React, { Component } from 'react';
import CardLinkCard from '../../../plugins/semantic/CardLinkCard';
import api from './../../../services/api';
import { prevPage } from './../utils/prevPage';
import { nextPage } from './../utils/nextPage';
import LayoutList from './../utils/LayoutList';

const direction = ['DESC','ASC']

var countPosts = 0;

export default class Posts extends Component {

  state = {
    posts: [],
    postsInfo: {},
    page: 0
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async (page = 0) => {
    const response = await api.get(`/postagem/buscar/ativo/true?page=${page}&size=5&orderBy=datePost&direction=${direction[1]}`);
    console.log(response)
    countPosts = response.data.totalElements;
    const { content, ...postsInfo } = response.data;

    this.setState({posts: content, postsInfo, page});
  }

  prevPage = () => {
    const { page, postsInfo } = this.state;

    if(page === 0) return;

    const pageNumber = page - 1;

    this.loadPosts(pageNumber)
  }

  nextPage = () => {
    const { page, postsInfo } = this.state;

    if (page === postsInfo.pages) return;

    const pageNumber = page + 1;

    this.loadPosts(pageNumber);
  }

  render() {
    const { posts, page, postsInfo } = this.state;

    const countCurrentPosts = this.state.posts.length;

    return (
      <LayoutList 
        titleLayoutList={'MINHAS POSTAGENS'} 
        subTitleLayoutList={`Atualmente tenho ${countPosts} postagens publicadas.`} 
        descriptionLayoutList={`Pagina: ${page+1} / posts na pagina: ${countCurrentPosts} de ${countPosts}`}
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
        logicalPrevLayoutList={page === 0} 
        clickPrevLayoutList={this.prevPage} 
        logicalNextLayoutList={page === postsInfo.pages} 
        clickNextLayoutList={this.nextPage}
      />        
    );
  }
}
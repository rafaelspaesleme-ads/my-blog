import React, { Component } from 'react';
import FeedBasic from '../../../plugins/semantic/FeedBasic';
import api from './../../../services/api';
import { prevPage } from './../utils/prevPage';
import { nextPage } from './../utils/nextPage';
import LayoutList from './../utils/LayoutList';

export default class Forums extends Component {

  state = {
    forums: [],
    forumsInfo: {},
    comentsPostForums: [],
    page: 1
  }

  componentDidMount() {
    this.loadForums();
  }

  loadComentsPostForum = async () => {
    const response = await api.get(`/forum/coments/lista/situacao/${true}`);

    const { ...comentsPostForumsInfo } = response.data;

    this.setState({comentsPostForums: comentsPostForumsInfo})
  }

  loadForums = async (page = 1) => {
    const response = await api.get(`/forum/lista/situacao/${true}?page=${page}`);

    const { ...forumsInfo } = response.data;

    this.setState({forums: forumsInfo, page })
  }

  render() {

    const { forums, page, forumsInfo, comentsPostForums } = this.state;

    return (
      <LayoutList 
      titleLayoutList={'MEUS ARTIGOS'} 
      subTitleLayoutList={`Atualmente tenho ${this.state.forums.length} publicados.`} 
      contentLayoutList={
        forums.map(forum => (
          <FeedBasic key={forum.id} 
            avatarFeed={forum.urlFollowerAvatar} 
            linkFollowerFeed={forum.urlFollowerProfile} 
            nameFollowerFeed={forum.nameFollower} 
            datePostForumFeed={forum.date} 
            descriptionPostForumFeed={forum.description} 
            comentsForumFeed={comentsPostForums.filter(coment => coment.idForum === forum.id).length} 
            linkCurrentForum={`/forum/${forum.id}`}
          />
        ))
      } 
      logicalPrevLayoutList={page === 1} 
      clickPrevLayoutList={prevPage} 
      logicalNextLayoutList={page === forumsInfo.pages} 
      clickNextLayoutList={nextPage}
    />
    );
  }
}
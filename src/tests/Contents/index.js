import React, { Component } from 'react';

import CardCardProps from '../../plugins/semantic/CardCardProps';
import CardLinkCard from '../../plugins/semantic/CardLinkCard';
import FeedBasic from '../../plugins/semantic/FeedBasic';
import ListDivided from '../../plugins/semantic/ListDivided';
import ProgressBar from '../../plugins/semantic/ProgressBar';
import TabPointing from '../../plugins/semantic/TabPointing';

export default class Contents extends Component {
  render() {
    return (
        <div>
            <CardLinkCard key={5}
              linkCard={"`/post/${post.id}`"} 
              titleCard={"Hello"} 
              subTitleCard={"Hello world"} 
              descriptionCard={"hsauhsua shausahsuah hsauhs au"}
            />
            <ProgressBar key={4}
              percentageProgress={"80"} 
              titleProgress={"Java"}
              colorProgress={"green"}
            />
            <FeedBasic key={3} 
              avatarFeed={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"} 
              linkFollowerFeed={"https://api.github.com/users/rafaelspaesleme-ads"} 
              nameFollowerFeed={"Rafael Paes Leme"} 
              datePostForumFeed={"5 de janeiro de 2020"} 
              descriptionPostForumFeed={"hsauhsuas hsuahsuahs hsuahsuahs"} 
              comentsForumFeed={"5"} 
              linkCurrentForum={'/forum/3'}
            />
            <ListDivided key={2}
                linkListDivided={"https://api.github.com/users/rafaelspaesleme-ads"} 
                iconListDivided={"headphones"} 
                titleListDivided={"Hello World"} 
                descriptionListDivided={"hsuhausa hsuahsa hsuahsua shauhsua"}
            />
            <CardCardProps key={1} 
                linkCardProps={"https://api.github.com/users/rafaelspaesleme-ads"} 
                imageCardProps={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"} 
                titleCardProps={"TITULO TESTE"} 
                subTitleCardProps={"sub titulo teste"} 
                descriptionCardProps={"hasuhaush aushaushuash hsaushua hsuahs"}
            />
        </div>
    );
  }
}

import React from 'react';
import { Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './style.css';

export default function HeaderImage(props) {
  return (
    <Header as='h2'>
        <Image circular src={props.avatarFollower} /> 
        <span id="header-title">
          <a href="/home">
            {props.nameFollower}
            <i id="main-subtitle-blog" >{props.subNameFollower}</i>
          </a>
        </span>
    </Header>
  );
}

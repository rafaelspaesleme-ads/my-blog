import React from 'react';
import { Header, Image } from 'semantic-ui-react'
import './style.css';

export default function HeaderImage(props) {
  return (
    <Header as='h2'>
        <Image circular src={props.avatarFollower} /> 
        <span id="header-title">
            {props.nameFollower}
        </span>
    </Header>
  );
}

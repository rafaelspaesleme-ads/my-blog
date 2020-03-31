import React from 'react';
import { Card } from 'semantic-ui-react'
import './style.css';

export default function CardLinkCard(props) {
  const idPost = props.localIdPost;
  const titlePost = props.localTitlePost;

    localStorage.setItem('id-post', idPost);
    localStorage.setItem('title-post', titlePost);

  return (
    <Card className="item-card"
    href={props.linkCard}
    header={props.titleCard}
    meta={props.subTitleCard}
    description={props.descriptionCard}
  />
  );
}

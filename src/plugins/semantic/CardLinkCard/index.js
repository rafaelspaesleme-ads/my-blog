import React from 'react';
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './style.css';

export default function CardLinkCard(props) {
  const idPost = props.localIdPost;
  const titlePost = props.localTitlePost;
  const linkPost = props.linkCardProps;

    localStorage.setItem('id-post', idPost);
    localStorage.setItem('title-post', titlePost);

  return (
    <Link to={linkPost}>
      <Card className="item-card"
      href={linkPost}
      header={props.titleCard}
      meta={props.subTitleCard}
      description={props.descriptionCard}
      />
    </Link>
  );
}

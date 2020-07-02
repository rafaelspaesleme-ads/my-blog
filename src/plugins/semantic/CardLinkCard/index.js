import React from 'react';
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './style.css';

export default function CardLinkCard(props) {
  return (
      <Card className="item-card"
      header={props.titleCard}
      meta={props.subTitleCard}
      description={props.descriptionCard}
      />
  );
}

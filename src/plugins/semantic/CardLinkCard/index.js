import React from 'react';
import { Card } from 'semantic-ui-react'
import './style.css';

export default function CardLinkCard(props) {
  return (
    <Card className="item-card"
    href={props.linkCard}
    header={props.titleCard}
    meta={props.subTitleCard}
    description={props.descriptionCard}
  />
  );
}

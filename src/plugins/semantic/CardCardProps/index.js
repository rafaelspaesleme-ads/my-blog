/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './style.css';

export default function CardCardProps(props) {
    const extra = (
        <div className="item-box-link" >
          <Link className="item-link" to={props.linkCardProps}>
            <span>
              <Icon className="item-icon" name='eye' /> Visualizar artigo
            </span>
          </Link>
        </div>
      )

  return (
    <Card className="item-card"
    image={props.imageCardProps}
    header={props.titleCardProps}
    meta={props.subTitleCardProps}
    description={props.descriptionCardProps}
    extra={extra}
  />
  );
}

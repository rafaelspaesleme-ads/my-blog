import React from 'react';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.css'

export default function ListDivided(props) {
  return (
  <List divided relaxed className="item-list">
  <List.Item className="item-list-item">
    <Link to={props.linkListDivided} className="item-link">
        <List.Content className="item-list-content">
          <List.Content className="box-icon">
            <List.Icon name={props.iconListDivided} size='large' verticalAlign='middle' className="item-list-icon" />
          </List.Content>  
          <List.Content className="box-content">
            <List.Header as='a' className="item-list-header">{props.titleListDivided}</List.Header>
            <List.Description as='a' className="item-list-description">{props.descriptionListDivided}</List.Description>
          </List.Content>  
        </List.Content>
    </Link>
  </List.Item>
  </List>
  );
}

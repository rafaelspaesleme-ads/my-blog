import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './style.css';

// import { Container } from './styles';

export default function ButtonIcon(props) {
  return (
    <Button className="item-buttom" icon>
        <Icon className="item-icon" name={props.iconButton} />
    </Button>
  );
}

import React from 'react';
import './styles.css'

// import { Container } from './styles';

export default function LayoutList(props) {
  return (
    <div className="content">
        <h1 className="title fonts" >{props.titleLayoutList}</h1>
        <h3 className="subtitle fonts" >{props.subTitleLayoutList}</h3>
        <h4 className="subtitle fonts" >{props.descriptionLayoutList}</h4>
            <center>{props.contentLayoutList}</center>
        <div className="actions-button" >
            <button className="fonts" disabled={props.logicalPrevLayoutList} onClick={props.clickPrevLayoutList} >Anterior</button>
            <button className="fonts" disabled={props.logicalNextLayoutList} onClick={props.clickNextLayoutList} >Anterior</button>
        </div>
    </div>
  );
}


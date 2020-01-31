import React from 'react';
import { Dropdown, DropdownItem } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function DropdownSimple(props) {

  return (
    <Dropdown text=" " icon="settings"  >
      <Dropdown.Menu>
        <DropdownItem icon="sign-in" text='Logar' tag={ Link } to={props.loginDrop} >

        </DropdownItem>
        <DropdownItem icon="add user" text='Siga-nos' tag={ Link } to={props.userDrop} >
          
        </DropdownItem>
        <Dropdown.Divider />
        <DropdownItem icon="share square" text='Compartilhar' tag={ Link } to={props.sharedDrop} >
          
        </DropdownItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}
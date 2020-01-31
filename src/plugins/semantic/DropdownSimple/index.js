import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function DropdownSimple(props) {

  const links = [
    <Link to={props.loginDrop}></Link>,
    <Link to={props.userDrop}></Link>,
    <Link to={props.sharedDrop}></Link>
  ];

  return (
    <Dropdown text=" " icon="settings"  >
      <Dropdown.Menu>
        <Dropdown.Item icon="sign-in" text='Logar' onClick={links[0]} />
        <Dropdown.Item icon="add user" text='Siga-nos' onClick={links[1]} />
        <Dropdown.Divider />
        <Dropdown.Item icon="share square" text='Compartilhar' onClick={links[2]} />
      </Dropdown.Menu>
    </Dropdown>
  );
}
import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function DropdownSimple(props) {

  return (
    <Dropdown text=" " icon="th"  >
      <Dropdown.Menu>
            {/**<Dropdown.Item icon={props.iconItemOne} text={props.nameItemOne} href={props.linkItemOne} />*/}
  {/**<Dropdown.Item icon={props.iconItemTwo} text={props.nameItemTwo} href={props.linkItemTwo} target={props.typeTargetOne} />*/}
            {/**<Dropdown.Divider />*/}
            <Dropdown.Item icon={props.iconItemThree} text={props.nameItemThree} href={props.linkItemThree} target={props.typeTargetTwo} />
      </Dropdown.Menu>
    </Dropdown>
  );
}
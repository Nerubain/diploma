import React from 'react';
import { Dropdown, Image } from 'semantic-ui-react';

const options = [
  { key: 'user', text: 'Account', icon: 'user' },
  { key: 'settings', text: 'Settings', icon: 'settings' },
  { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
];

const trigger = (
  <span>
    <Image avatar src="https://react.semantic-ui.com/images/wireframe/square-image.png" />
  </span>
);

export default function UserDropDown() {
  return <Dropdown text="Filter" icon={null} trigger={trigger} options={options} item />;
}

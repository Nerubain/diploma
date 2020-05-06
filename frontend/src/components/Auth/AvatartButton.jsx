import React from 'react';
import { Image, Divider } from 'semantic-ui-react';

import { InputWrapper, HiddenInput, InputLabel } from './style';

export default function AvatartButton({ onAvatarChange, avatar }) {
  const uploadAvatar = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      onAvatarChange(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <InputWrapper>
      <Image src={avatar} circular size="small" centered />
      <InputLabel for="file" />
      <HiddenInput type="file" name="file" id="file" onChange={uploadAvatar} />
      <Divider hidden clearing />
    </InputWrapper>
  );
}

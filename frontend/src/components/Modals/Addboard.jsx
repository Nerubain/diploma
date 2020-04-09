import React, { useCallback } from 'react';
import { Header, Image, Modal } from 'semantic-ui-react';

export default function Addboard({ modal, close }) {
  const isOpen = modal === 'create_board';
  const closeHandler = useCallback(() => close(), [close]);

  return (
    <Modal open={isOpen} onClose={closeHandler}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
        />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>Weve found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
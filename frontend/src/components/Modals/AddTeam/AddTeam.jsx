import React, { useState, useRef, useEffect, useContext } from 'react';
import { useStoreon } from 'storeon/react';
import { Segment, Header, Input, Button, Form } from 'semantic-ui-react';

import { SocketContext } from '@context/socket.context';

export default function AddTeam({ close }) {
  const { createTeamSocket } = useContext(SocketContext);
  const [team, setTeam] = useState('');
  const { user } = useStoreon('user');
  const inputRef = useRef(null);
  const disabled = !team;

  const onChange = (e, { value }) => setTeam(value);

  const onSubmit = (e) => {
    e.preventDefault();
    createTeamSocket({ team: { title: team }, userId: user.id });
    setTeam('');
    close();
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <Segment>
      <Form onSubmit={onSubmit}>
        <Header as="h3">Создание команды</Header>
        <Input
          placeholder="Введите имя команды"
          fluid
          icon="group"
          value={team}
          onChange={onChange}
          ref={inputRef}
        />
        <Button
          fluid
          style={{ marginTop: 10 }}
          disabled={disabled}
          color={disabled ? null : 'green'}
          type="submit"
        >
          Создать команду
        </Button>
      </Form>
    </Segment>
  );
}

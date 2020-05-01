import React, { useState, useRef, useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import faker from 'faker';
import { Segment, Header, Input, Button, Form } from 'semantic-ui-react';

export default function AddTeam({ close }) {
  const [team, setTeam] = useState('');
  const { dispatch } = useStoreon();
  const inputRef = useRef(null);
  const disabled = !team;

  const onChange = (e, { value }) => setTeam(value);

  const onSubmit = (e) => {
    e.preventDefault();
    const id = faker.random.uuid();
    const newTeam = { id, label: team, url: `/team/${id}/boards`, boardsIds: [], icon: 'group' };
    dispatch('user/create_team', newTeam);
    dispatch('boards/create_category', newTeam);
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

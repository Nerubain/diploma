import React from 'react';
import { Segment, Form, Header, Button, Dropdown } from 'semantic-ui-react';

export default function AddToTeam() {
  return (
    <Segment>
      <Form>
        <Header as="h3">Добавить в команду</Header>
        <Dropdown placeholder="Введите имя" fluid search multiple selection />
        <Button fluid style={{ marginTop: 10 }} type="submit">
          Добавить к команде
        </Button>
      </Form>
    </Segment>
  );
}

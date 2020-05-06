import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

import useValidateForm from '@hooks/useFormValidate';
import CustomFormField from './FormField';
import { LinkButton } from './style';

const LoginForm = ({ changeRoute, login }) => {
  const { errors, changeErrors, clearError } = useValidateForm();
  const [formState, setFormState] = useState({ login: 'nerub', password: '12345' });

  const onChangeHandler = (_, { value, name }) => {
    clearError(name);
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (changeErrors(formState)) return null;
    return login(formState);
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Авторизоваться
        </Header>
        <Form size="large" onSubmit={onSubmit}>
          <Segment stacked>
            <CustomFormField
              icon="user"
              placeholder="simpleLogin ..."
              name="login"
              value={formState.login}
              onChange={onChangeHandler}
              errors={errors}
            />
            <CustomFormField
              icon="lock"
              placeholder="Пароль"
              type="password"
              name="password"
              value={formState.password}
              onChange={onChangeHandler}
              errors={errors}
            />
            <Button color="teal" fluid size="large">
              авторизация
            </Button>
          </Segment>
        </Form>
        <Message>
          Нет аккаунта?{' '}
          <LinkButton name="join" onClick={changeRoute}>
            Регистрация
          </LinkButton>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;

/* <FormWrapper>
<Segment>
  <Header as="h3" textAlign="center">
    Authorisation
  </Header>
  <Form onSubmit={logIn}>
    <CustomInput
      label="Login"
      type="text"
      name="login"
      errors={errors.login}
      placeholder="User"
      value={login}
      onChange={(e, { value }) => hanlder(value, setLogin, 'login')}
    />
    <CustomInput
      label="Password"
      type="password"
      name="password"
      errors={errors.password}
      value={password}
      onChange={(e, { value }) => hanlder(value, setPassword, 'password')}
      placeholder="*********"
    />
    <Form.Button fluid color="green" type="submit">
      Login
    </Form.Button>
  </Form>
</Segment>
</FormWrapper> */

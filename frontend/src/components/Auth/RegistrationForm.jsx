import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

import useValidateForm from '@hooks/useFormValidate';
import AvatartButton from './AvatartButton';
import CustomFormField from './FormField';
import { LinkButton } from './style';

const initialImage =
  'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-picture-default-avatar-photo-placeholder-profile-picture-eps-file-easy-to-edit-125707135.jpg';

export default function RegistrationForm({ changeRoute, join }) {
  const { errors, changeErrors, clearError } = useValidateForm();
  const [formState, setFormState] = useState({
    avatar: initialImage,
    userName: 'nerub',
    login: 'nerub',
    password: '12345',
    confirmPassword: '12345',
  });

  const onChangeHandler = (_, { value, name }) => {
    clearError(name);
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  const onAvatarChange = (data) => setFormState((prev) => ({ ...prev, avatar: data }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (changeErrors(formState)) return null;
    return join(formState);
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Регистрация
        </Header>
        <Form size="large" onSubmit={onSubmit}>
          <Segment stacked>
            <AvatartButton onAvatarChange={onAvatarChange} avatar={formState.avatar} />
            <CustomFormField
              icon="user"
              placeholder="Your nickname..."
              name="userName"
              value={formState.userName}
              onChange={onChangeHandler}
              errors={errors}
            />
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
            <CustomFormField
              icon="lock"
              placeholder="Повтор пароля"
              type="password"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={onChangeHandler}
              errors={errors}
            />

            <Button color="teal" fluid size="large" type="submit">
              Зарегестрироваться
            </Button>
          </Segment>
        </Form>
        <Message>
          Уже имеется аккаунт?{' '}
          <LinkButton onClick={changeRoute} name="login">
            Авторизация
          </LinkButton>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

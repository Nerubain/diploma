import React, { useState, useCallback } from 'react';
import { Segment, Form, Header } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import CustomInput from '../CustomInput';
import { FormWrapper } from './style';

const LoginForm = () => {
  const [login, setLogin] = useState('1');
  const [password, setPassword] = useState('1');
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const hanlder = useCallback((value, func, field) => {
    setErrors((prevState) => ({ ...prevState, [field]: [] }));
    func(value);
  }, []);

  const checkValid = () => {
    setErrors({
      login: !login ? ['Это поле не может быть пустым'] : [],
      password: !password ? ['Это поле не может быть пустым'] : [],
    });
    return login && password;
  };

  const logIn = async () => {
    if (checkValid()) {
      try {
        history.push('/nerub/boards');
      } catch (error) {
        setErrors(error);
      }
    }
  };

  return (
    <FormWrapper>
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
    </FormWrapper>
  );
};

export default LoginForm;

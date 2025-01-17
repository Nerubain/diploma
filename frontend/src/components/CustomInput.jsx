import React from 'react';
import { FormInput } from 'semantic-ui-react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const Input = styled(FormInput)`
  margin-bottom: 0 !important;
`;

const ErrorWrapper = styled.div`
  margin-bottom: 15px;
  font-size: 9px;
  color: red;
`;

export default function CustomInput({
  type = 'text',
  label,
  value,
  onChange,
  onErrors,
  placeholder,
  name,
  errors,
}) {
  return (
    <InputWrapper>
      <Input
        fluid
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
      <ErrorWrapper>{errors && errors.map((error) => <div key={error}>{error}</div>)}</ErrorWrapper>
    </InputWrapper>
  );
}

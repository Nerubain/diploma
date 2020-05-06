import React from 'react';
import { FormInput } from 'semantic-ui-react';

export default function CustomFormField(props) {
  const { icon, name, value, type, onChange, placeholder, errors } = props;
  return (
    <FormInput
      fluid
      icon={icon}
      iconPosition="left"
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      error={errors[name] && { content: errors[name], pointing: 'below' }}
      // required
    />
  );
}

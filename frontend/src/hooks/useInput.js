import { useState } from 'react';

export default (initialVal = false) => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e, errors, changeErrors, fieldName) => {
    setValue(e.target.value);
    if (errors) {
      const newErrors = { ...errors };
      newErrors[fieldName] = [];
      changeErrors(newErrors);
    }
  };

  const handleSetValue = (data) => setValue(data);

  const reset = () => setValue('');

  return [value, handleChange, reset, handleSetValue];
};

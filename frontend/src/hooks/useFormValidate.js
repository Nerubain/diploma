import { useState } from 'react';

export default (initialVal = {}) => {
  const [errors, setErrors] = useState({});

  const clearError = (name) => setErrors((prev) => ({ ...prev, [name]: null }));

  const changeErrors = (fields) => {
    const { userName, login, password, confirmPassword } = fields;
    if (!userName) setErrors((prev) => ({ ...prev, userName: 'Это поле не может быть пустым' }));
    if (!login) setErrors((prev) => ({ ...prev, login: 'Это поле не может быть пустым' }));
    if (!password) setErrors((prev) => ({ ...prev, password: 'Это поле не может быть пустым' }));
    if (!confirmPassword || password !== confirmPassword)
      setErrors((prev) => ({ ...prev, confirmPassword: 'Пароли не совпадают' }));
    return !userName && !login && !password && !confirmPassword && password !== confirmPassword;
  };
  return { errors, changeErrors, clearError };
};

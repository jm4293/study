import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthApi = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    const response = await AuthApi.login({ email, password });

    if (!!response) {
      const { result } = response.data;

      // if (result === ResponseCodeEnum.SUCCESS) {
      //   navigate('/board-list');
      // }
    }
  };

  const onSignUpHandle = () => {
    navigate('/sign-up');
  };

  const onFindPasswordHandle = () => {
    navigate('/find-password');
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    onSubmitHandle,
    onSignUpHandle,
    onFindPasswordHandle,
  };
};

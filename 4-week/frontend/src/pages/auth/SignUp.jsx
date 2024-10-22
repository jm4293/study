import React, { useState } from 'react';
import { AuthApi, ResponseCodeEnum } from '../../commons';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await AuthApi.signUp(data);

    if (!!response) {
      const { result } = response.data;

      if (result === ResponseCodeEnum.SUCCESS) {
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>회원가입</h2>
        <div className="input-group">
          <label htmlFor="email">아이디</label>
          <input
            value={data.email}
            onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData((prev) => ({ ...prev, password: e.target.value }))}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">이름</label>
          <input value={data.name} onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))} required />
        </div>
        <button type="submit" className="sign-up-button">
          회원가입
        </button>
      </form>
    </div>
  );
};

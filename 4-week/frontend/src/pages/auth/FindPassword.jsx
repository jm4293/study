import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { AuthApi, ResponseCodeEnum } from '../../commons';

export const FindPassword = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await AuthApi.findPassword(data);

    if (!!response) {
      const { result } = response.data;

      if (result === ResponseCodeEnum.SUCCESS) {
        alert('비밀번호 변경이 완료되었습니다.');
        navigate('/');
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>비밀번호 변경</h2>
        <div className="input-group">
          <label htmlFor="email">이메일</label>
          <input
            value={data.email}
            onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">변경 비밀번호</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData((prev) => ({ ...prev, password: e.target.value }))}
            required
          />
        </div>

        <button type="submit" className="sign-up-button">
          변경
        </button>
      </form>
    </div>
  );
};

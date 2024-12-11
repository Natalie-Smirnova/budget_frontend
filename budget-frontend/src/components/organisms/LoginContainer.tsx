import React from 'react';
import { LoginForm } from '../molecules/LoginForm';
import s from './style.module.css';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export const LoginContainer: React.FC = () => (
  <div className={s.container}>
    <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
  </div>
);

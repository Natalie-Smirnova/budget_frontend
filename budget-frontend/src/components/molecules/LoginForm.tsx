import React from 'react';
import { Form } from 'antd';
import { InputField } from '../atoms/InputField';
import { ButtonPrimary } from '../atoms/ButtonPrimary';
import { CheckboxField } from '../atoms/CheckboxField';
import { Link } from 'react-router-dom';

type LoginFormProps = {
  onFinish: (values: any) => void;
  onFinishFailed: (errorInfo: any) => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onFinish, onFinishFailed }) => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <InputField
      name="username"
      label="E-mail"
      rules={[
        { type: 'email', message: 'The input is not valid E-mail!' },
        { required: true, message: 'Please input your E-mail!' },
      ]}
    />
    <InputField
      name="password"
      label="Password"
      rules={[{ required: true, message: 'Please input your password!' }]}
      type="password"
    />
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <CheckboxField name="remember" />
      <a href="">Forgot password</a>
    </div>
    <Form.Item>
      <ButtonPrimary text="Log in" block htmlType="submit" />
      or <Link to="/register">Register now!</Link>
    </Form.Item>
  </Form>
);

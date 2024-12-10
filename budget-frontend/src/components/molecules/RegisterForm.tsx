import React from 'react';
import { Form } from 'antd';
import { InputField } from '../atoms/InputField';
import { PasswordField } from '../atoms/PasswordField';
import { ButtonPrimary } from '../atoms/ButtonPrimary';

type RegisterFormProps = {
  onFinish: (values: any) => void;
  formItemLayout: any;
  tailFormItemLayout: any;
};

export const RegisterForm: React.FC<RegisterFormProps> = ({ onFinish, formItemLayout, tailFormItemLayout }) => (
  <Form {...formItemLayout} name="register" onFinish={onFinish} scrollToFirstError>
    <InputField
      name="email"
      label="E-mail"
      rules={[
        { type: 'email', message: 'The input is not valid E-mail!' },
        { required: true, message: 'Please input your E-mail!' },
      ]}
    />
    <PasswordField
      name="password"
      label="Password"
      rules={[{ required: true, message: 'Please input your password!' }]}
      hasFeedback
    />
    <PasswordField
      name="confirm"
      label="Confirm Password"
      dependencies={['password']}
      rules={[
        { required: true, message: 'Please confirm your password!' },
        ({ getFieldValue }: { getFieldValue: (field: string) => string }) => ({
          validator(_: any, value: string) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('The new password that you entered do not match!'));
          },
        }),
      ]}
      hasFeedback
    />
    <Form.Item {...tailFormItemLayout}>
      <ButtonPrimary text="Register" htmlType="submit" />
    </Form.Item>
  </Form>
);

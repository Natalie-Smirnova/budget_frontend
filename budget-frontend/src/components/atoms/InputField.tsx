import React from 'react';
import { Input, Form } from 'antd';

type InputFieldProps = {
  name: string;
  label: string;
  rules?: any[];
  type?: 'text' | 'password' | 'email';
};

export const InputField: React.FC<InputFieldProps> = ({ name, label, rules, type = 'text' }) => (
  <Form.Item name={name} label={label} rules={rules}>
    {type === 'password' ? (
      <Input.Password aria-label={`${label} input`} />
    ) : (
      <Input aria-label={`${label} input`} type={type} />
    )}
  </Form.Item>
);

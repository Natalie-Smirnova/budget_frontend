import React from 'react';
import { Form, Input } from 'antd';

type PasswordFieldProps = {
  name: string;
  label: string;
  rules?: any[];
  dependencies?: string[];
  hasFeedback?: boolean;
};

export const PasswordField: React.FC<PasswordFieldProps> = ({ name, label, rules, dependencies, hasFeedback }) => (
  <Form.Item name={name} label={label} rules={rules} dependencies={dependencies} hasFeedback={hasFeedback}>
    <Input.Password aria-label={`${label} input`} />
  </Form.Item>
);

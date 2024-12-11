import React from 'react';
import { Checkbox, Form } from 'antd';

type CheckboxFieldProps = {
  name: string;
  label?: string | null;
};

export const CheckboxField: React.FC<CheckboxFieldProps> = ({ name, label = null }) => (
  <Form.Item name={name} valuePropName="checked" label={label}>
    <Checkbox>Remember me</Checkbox>
  </Form.Item>
);

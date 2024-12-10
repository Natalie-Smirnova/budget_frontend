import React from 'react';
import { RegisterForm } from '../molecules/RegisterForm';
import { Form, Grid } from 'antd';

const { useBreakpoint } = Grid;

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 4 },
    lg: { span: 16, offset: 4 },
  },
};

export const RegisterContainer: React.FC = () => {
  const [form] = Form.useForm();
  const screens = useBreakpoint();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div style={{ minWidth: screens.xs ? '100%' : '500px' }}>
      <RegisterForm onFinish={onFinish} formItemLayout={formItemLayout} tailFormItemLayout={tailFormItemLayout} />
    </div>
  );
};

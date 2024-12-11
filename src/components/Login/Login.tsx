import React from 'react';
import s from './style.module.css';
import type {FormProps} from 'antd';
import {Button, Checkbox, Form, Input, Flex} from 'antd';
import {Link} from 'react-router-dom';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export const Login: React.FC = () => (
    <div className={s.container}>
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                name="username"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input aria-label="Email input"/>
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password aria-label="Password input"/>
            </Form.Item>
            <Flex justify="space-between" align="center">
                <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="">Forgot password</a>
            </Flex>

            <Form.Item>
                <Button block type="primary" htmlType="submit">
                    Log in
                </Button>
                or <Link to='/register'>Register now!</Link>
            </Form.Item>
        </Form>
    </div>
);


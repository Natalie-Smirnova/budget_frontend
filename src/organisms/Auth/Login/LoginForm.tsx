import React from 'react';
import s from './style.module.css';
import type {FormProps} from 'antd';
import { Checkbox, Flex} from 'antd';
import {Link} from 'react-router-dom';
import {CButton} from '../../../atoms/Button';
import {CForm, CFormItem} from '../../../molecules/Form';
import {CInput, CPasswordInput} from '../../../atoms/Input'

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

interface LoginFormProps<T> extends FormProps<T> {
    onFinish?: (val: any) => void;
    onFinishFailed?: (val : any) => void;
}
export const LoginForm: React.FC<LoginFormProps<FieldType>> = ({onFinish, onFinishFailed}) => (
    <div className={s.container}>
        <CForm
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <CFormItem<FieldType>
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
                <CInput aria-label="Email input"/>
            </CFormItem>

            <CFormItem<FieldType>
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <CPasswordInput aria-label="Password input"/>
            </CFormItem>
            <Flex justify="space-between" align="center">
                <CFormItem<FieldType> name="remember" valuePropName="checked" label={null}>
                    <Checkbox>Remember me</Checkbox>
                </CFormItem>
                <a href="">Forgot password</a>
            </Flex>

            <CFormItem>
                <CButton label={'Register'} type="primary"/>

                or <Link to='/register'>Register now!</Link>
            </CFormItem>
        </CForm>
    </div>
);


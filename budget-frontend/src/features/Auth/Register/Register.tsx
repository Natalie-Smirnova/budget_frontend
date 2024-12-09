import React, { useState } from 'react';
import {
    Grid
} from 'antd';
import {CButton} from '../../../common/Button';
import {CForm, CFormItem} from '../../../blocks/Form';
import {CInput, CPasswordInput} from '../../../common/Input'

const { useBreakpoint } = Grid;

interface DataNodeType {
    value: string;
    label: string;
    children?: DataNodeType[];
}

interface RegisterFormValues {
    email: string;
    password: string;
    confirm: string;
}

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 4 },
        lg: { span: 16, offset: 4 },
    },
};

export const Register: React.FC = () => {
    const [form] = CForm.useForm();
    const screens = useBreakpoint()

    const onFinish = (values: RegisterFormValues) => {
        console.log('Received values of form: ', values);
    };
    return (
        <CForm
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{ minWidth: screens.xs ? '100%' : '500px' }}
            scrollToFirstError
        >
            <CFormItem
                name="email"
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

            <CFormItem
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <CPasswordInput aria-label="Password input"/>
            </CFormItem>

            <CFormItem
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <CPasswordInput aria-label="Password input conformation"/>
            </CFormItem>

            <CFormItem {...tailFormItemLayout}>
                <CButton type="primary" htmlType="submit">
                    Register
                </CButton>
            </CFormItem>
        </CForm>
    );
};


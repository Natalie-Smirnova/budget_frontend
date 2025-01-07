import React, { useState } from 'react';
import {
    type FormProps,
    Grid
} from 'antd';
import {CButton} from '../../../atoms/Button';
import {CForm, CFormItem} from '../../../molecules/Form';
import {CInput, CPasswordInput} from '../../../atoms/Input'
import {formItemLayout, tailFormItemLayout} from "../../../config/formLayouts";

const { useBreakpoint } = Grid;

interface LoginFormProps<T> extends FormProps<T> {
    onFinish?: (val: any) => void;
    onFinishFailed?: (val : any) => void;
}

interface RegisterFormValues {
    email: string;
    password: string;
    confirm: string;
}



export const RegisterForm: React.FC<LoginFormProps<FormProps>> = ({onFinish, onFinishFailed}) => {
    const [form] = CForm.useForm();
    const screens = useBreakpoint()

    return (
        <CForm
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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


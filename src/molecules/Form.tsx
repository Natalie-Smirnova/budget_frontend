import React, {ReactElement} from 'react';
import {Form, FormProps, FormItemProps} from 'antd';

type CFormProps<T> = FormProps<T>
    & {
    children?: React.ReactNode;
};

type CFormItemProps<T> = FormItemProps<T>
    & {
    children?: React.ReactNode;
};


export const CForm = <T extends Record<string, any>>(
    {children,onFinish, onFinishFailed, ...FormProps}:CFormProps<T>
): ReactElement => (
    <Form {...FormProps} onFinish={onFinish}  onFinishFailed={onFinishFailed}>
        {children}
    </Form>
);

export const CFormItem = <T extends Record<string, any>>(
    {children, ...FormItemProps}:CFormItemProps<T>
): ReactElement => (
    <Form.Item {...FormItemProps}>
        {children}
    </Form.Item>
);

CForm.useForm = Form.useForm;




import React from 'react';
import { Button, ButtonProps as AntdButtonProps } from 'antd';


type ButtonProps = {
    label?: string;
} & AntdButtonProps;

export const CButton: React.FC<ButtonProps> = ({ type = 'primary', label, ...rest}) => {
    return <Button {...rest}>{label}</Button>;
};
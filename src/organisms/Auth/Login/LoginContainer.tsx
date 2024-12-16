import React from 'react';
import { LoginForm } from './LoginForm';
import s from './style.module.css';


export const LoginContainer: React.FC = () => {
    const onFinish = (values: any) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className={s.container}>
            <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </div>
    );
};
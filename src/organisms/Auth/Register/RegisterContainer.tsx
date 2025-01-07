import React from 'react';
import { RegisterForm } from './RegisterForm';
import s from './style.module.css';


export const RegisterContainer: React.FC = () => {
    const onFinish = (values: any) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className={s.container}>
            <RegisterForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </div>
    );
};
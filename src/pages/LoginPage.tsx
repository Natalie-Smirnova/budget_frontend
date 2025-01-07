import React from 'react';
import { AuthTemplate } from '../tepmlates/AuthTemplate';
import { LoginContainer } from '../organisms/Auth/Login/LoginContainer';

export const LoginPage: React.FC = () => (
    <AuthTemplate>
        <LoginContainer />
    </AuthTemplate>
);
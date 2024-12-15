import React from 'react';
import { LoginContainer } from '../organisms/LoginContainer';
import { AuthTemplate } from '../templates/AuthTemplate';

export const LoginPage: React.FC = () => (
  <AuthTemplate>
    <LoginContainer />
  </AuthTemplate>
);

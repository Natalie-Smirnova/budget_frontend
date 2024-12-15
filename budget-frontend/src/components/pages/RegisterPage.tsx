import React from 'react';
import { AuthTemplate } from '../templates/AuthTemplate';
import { RegisterContainer } from '../organisms/RegisterContainer';

export const RegisterPage: React.FC = () => (
  <AuthTemplate>
    <RegisterContainer />
  </AuthTemplate>
);

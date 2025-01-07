import React from 'react';
import { AuthTemplate } from '../tepmlates/AuthTemplate';
import { RegisterContainer} from '../organisms/Auth/Register/RegisterContainer';

export const RegisterPage: React.FC = () => (
    <AuthTemplate>
        <RegisterContainer />
    </AuthTemplate>
);export {};
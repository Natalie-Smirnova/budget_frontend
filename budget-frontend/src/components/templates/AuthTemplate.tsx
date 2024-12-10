import React from 'react';

type AuthTemplateProps = {
  children: React.ReactNode;
};

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    {children}
  </div>
);

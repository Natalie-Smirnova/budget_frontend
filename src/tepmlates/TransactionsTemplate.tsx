import React from 'react';

type TransactionsTemplateProps = {
    children: React.ReactNode;
};

export const TransactionsTemplate: React.FC<TransactionsTemplateProps> = ({ children }) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {children}
    </div>
);
import React from 'react';
import {TransactionsTemplate} from "../tepmlates/TransactionsTemplate";
import {TransactionContainer} from "../organisms/Transactions/TransactionsList/TransactionsContainer";

export const TransactionsPage: React.FC = () => (
    <TransactionsTemplate>
        <TransactionContainer />
    </TransactionsTemplate>
);export {};
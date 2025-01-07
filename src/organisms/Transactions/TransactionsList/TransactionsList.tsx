import React from 'react';
import { CTable } from '../../../molecules/Table';
import {CButton} from "../../../atoms/Button";

interface TransactionsListProps {
    transactions: Array<{
        id: number;
        category: string;
        type: string;
        value: number;
        date: string;
    }>;
    onRemoveTransaction: (id: number) => void;
}

export const TransactionsList: React.FC<TransactionsListProps> = ({
                                                                      transactions,
                                                                      onRemoveTransaction,
                                                                  }) => {
    const columns = [
        { title: 'Category', dataIndex: 'category', key: 'category' },
        { title: 'Type', dataIndex: 'type', key: 'type' },
        { title: 'Amount', dataIndex: 'value', key: 'amount' },
        { title: 'Date', dataIndex: 'date', key: 'date' },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: any) => (
                <CButton onClick={() => onRemoveTransaction(record.id)} label={'Remove'}></CButton>
            ),
        },
    ];

    return <CTable dataSource={transactions} columns={columns} />;
};
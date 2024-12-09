import React from 'react';
import {CTable} from '../../blocks/Table';

export const TransactionsList = () => {

    const columns = [
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
    ];

    const dataSource = [
        {
            key: '1',
            category: 'Food',
            description: 'Groceries for the week',
            amount: '45.20',
            date: '2024-11-01',
            type: 'Current',
        },
        {
            key: '2',
            category: 'Transport',
            description: 'Monthly bus pass',
            amount: '20.00',
            date: '2024-11-03',
            type: 'Current',
        },
        {
            key: '3',
            category: 'Clothing',
            description: 'New winter jacket',
            amount: '120.00',
            date: '2024-11-04',
            type: 'Medium-term',
        },
        {
            key: '4',
            category: 'Entertainment',
            description: 'Movie tickets',
            amount: '15.50',
            date: '2024-11-05',
            type: 'Current',
        },
        {
            key: '5',
            category: 'Health',
            description: 'Gym membership renewal',
            amount: '60.00',
            date: '2024-11-06',
            type: 'Medium-term',
        },
    ];



    return <CTable dataSource={dataSource} columns={columns}/>;
};


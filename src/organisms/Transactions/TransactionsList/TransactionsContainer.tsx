import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { removeTransaction } from '../../../store/slices/transactionsSlice';
import { TransactionsList } from './TransactionsList';

export const TransactionContainer: React.FC = () => {
    const dispatch = useDispatch();
    const transactions = useSelector((state: RootState) => state.transactions);

    const handleRemoveTransaction = (id: number) => {
        dispatch(removeTransaction(id));
    };

    return (
        <TransactionsList
            transactions={transactions}
            onRemoveTransaction={handleRemoveTransaction}
        />
    );
};
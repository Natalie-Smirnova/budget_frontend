import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface Transaction{
    id: number;
    value: number;
    category: string;
    date: string;
    type: 'income' | 'expense';
    spendingType?: 'strategic' | 'current' | 'midterm';
}

const initialState: Transaction[] = [];

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            state.push(action.payload);
    },
        removeTransaction: (state, action: PayloadAction<number>) => {
        state.filter( (transaction) => transaction.id !== action.payload );},
        editTransaction: (state, action: PayloadAction<Transaction>) => {
            const index = state.findIndex((transaction) => transaction.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },

})


export const { addTransaction, removeTransaction, editTransaction } = transactionsSlice.actions

export default transactionsSlice.reducer
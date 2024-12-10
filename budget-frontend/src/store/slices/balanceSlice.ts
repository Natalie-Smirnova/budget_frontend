import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface BalanceState {
    value: number;
}

const initialState: BalanceState = {
    value: 0,
};

export const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        addToBalance: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        suspectFromBalance: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },

    }
})


export const { addToBalance, suspectFromBalance } = balanceSlice.actions

export default balanceSlice.reducer
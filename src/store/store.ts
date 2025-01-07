import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from './slices/balanceSlice'
import transactionsReducer from './slices/transactionsSlice'

export const store = configureStore({
    reducer: {
        balance: balanceReducer,
        transactions: transactionsReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
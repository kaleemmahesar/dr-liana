import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'
import pagesReducer from './slices/pagesSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        pages: pagesReducer,
        auth: authReducer
    },
})
import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'
import pagesReducer from './slices/pagesSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        pages: pagesReducer
    },
})
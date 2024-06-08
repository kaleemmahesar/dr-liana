import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

// state initial state
const initialState = {
    isLoading: false,
    pages: [],
    pagesContaier: [],
    isError: false
}

// basic slice structure
export const pagesSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPages.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPages.fulfilled, (state, action) => {
            state.pages = action.payload
            state.pagesContaier = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchPages.rejected, (state) => {
            state.isError = true
        })
    }
})

// fetching pages from wp server using Async Thunk
export const fetchPages = createAsyncThunk('fetchPages', async () => {
    const response = await axios.get('http://localhost/wp-react/server/wp-json/wp/v2/pages')
    return response.data
})



// Action creators are generated for each case reducer function
export const { } = pagesSlice.actions

export default pagesSlice.reducer
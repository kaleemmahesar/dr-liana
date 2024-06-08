import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

// state initial state
const initialState = {
    isLoading: false,
    posts: [],
    publications: [],
    isError: false
}

// basic slice structure
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchPosts.rejected, (state) => {
            state.isError = true
        })
        builder.addCase(fetchPublications.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPublications.fulfilled, (state, action) => {
            state.publications = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchPublications.rejected, (state) => {
            state.isError = true
        })
    }
})

// fetching posts from wp server using Async Thunk
export const fetchPosts = createAsyncThunk('fetchPosts', async () => {
    const response = await axios.get('http://localhost/wp-react/server/wp-json/wp/v2/posts')
    return response.data
})

// fetching publications from wp server using Async Thunk
export const fetchPublications = createAsyncThunk('fetchPublications', async () => {
    const response = await axios.get('http://localhost/wp-react/server/wp-json/wp/v2/publications?_embed')
    return response.data
})

// Action creators are generated for each case reducer function
export const { } = postsSlice.actions

export default postsSlice.reducer
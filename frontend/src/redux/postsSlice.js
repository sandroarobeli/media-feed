import { createSlice } from '@reduxjs/toolkit'

// Dummy Data // delete
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload)
        },
        postUpdated: (state, action) => {
            const { id, title, content } = action.payload
            const existingPost = state.find((post) => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
})
  
// Exports reducer functions
export const { postAdded, postUpdated } = postsSlice.actions

// Exports all posts as an array
export const selectAllPosts = (state) => state.posts;


export default postsSlice.reducer
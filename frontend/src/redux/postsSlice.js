import { createSlice } from '@reduxjs/toolkit'

// Dummy Data // delete
const initialState = [
    { id: 'p1', title: 'First Post!', content: 'Hello!', user: 'u1', date: "2021-11-29T04:26:29.173Z", reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }},
    { id: 'p2', title: 'Second Post', content: 'More text', user: 'u2', date: "2021-11-29T04:27:11.856Z", reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }}
]



const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload)
        },
        postUpdated: (state, action) => {
            const { postId, title, content } = action.payload
            const existingPost = state.find((post) => post.id === postId)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        },
        reactionAdded: (state, action) => {
            const { postId, reaction } = action.payload
            const existingPost = state.find((post) => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        },
        postDeleted: (state, action) => {
            const { postId } = action.payload
            const existingPost = state.find((post) => post.id === postId)
            if (existingPost) {
                return state.filter((post) => post.id !== postId)
            }
        }
    }
})
  
// Exports reducer functions
export const { postAdded, postUpdated, reactionAdded, postDeleted } = postsSlice.actions

// Exports all posts as an array
export const selectAllPosts = (state) => state.posts;


export default postsSlice.reducer
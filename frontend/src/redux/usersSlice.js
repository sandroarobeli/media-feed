import { createSlice } from '@reduxjs/toolkit'

// Dummy Data // delete
const initialState = [
    { id: 'u0', name: 'Katie Towson' },
    { id: 'u1', name: 'Lily Peterson' },
    { id: 'u2', name: 'Anna Schwartz' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

// Exports reducer functions
export const { } = usersSlice.actions

// Exports all posts as an array
export const selectAllUsers = (state) => state.users;


export default usersSlice.reducer
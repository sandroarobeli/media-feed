import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    lightTheme: true
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.lightTheme = !state.lightTheme
        }
    }
})
  
// Exports reducer functions
export const { changeTheme } = themeSlice.actions

// Exports current theme state
export const selectTheme = (state) => state.theme.lightTheme;


export default themeSlice.reducer
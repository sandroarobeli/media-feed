// Third party
import { configureStore } from '@reduxjs/toolkit';

// Custom
import postsReducer from './postsSlice'
import usersReducer from './usersSlice'
import themeReducer from './themeSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
    users: usersReducer
  },
});


export default store

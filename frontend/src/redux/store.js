// Third party
import { configureStore } from '@reduxjs/toolkit';

// Custom
import postsReducer from './postsSlice'
import themeReducer from './themeSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer
  },
});


export default store

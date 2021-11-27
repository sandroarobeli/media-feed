// Third party
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline'

// Custom
import NavBar from './features/shared/Navbar'
import AddPostForm from './features/posts/AddPostForm'
import PostsList from './features/posts/PostsList'
import SinglePostPage from './features/posts/SinglePostPage'
import EditPostForm from './features/posts/EditPostForm'
import UsersList from './features/users/UsersList'
import UserPage from './features/users/UserPage'
import PageNotFound from './features/shared/PageNotFound'

// Custom theme module. Override default colors, breakpoints etc. to match customer' requirements
const themeLight = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 641,
      laptop: 1008
    }
  },
  palette: {
    background: {
      default: "#d1f4f9",
      paper: "#d1f4f9"
    },
  }
})

const themeDark = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 641,
      laptop: 1008
    }
  },
  palette: {
    mode: 'dark',
  },
})


const App = (props) => {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline /> 
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route
            path=""
            element={
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            }
          />
          <Route path="posts/view/:postId" element={<SinglePostPage />} />
          <Route path="posts/edit/:postId" element={<EditPostForm />} />
          <Route path="users" element={<UsersList />} />
          <Route path="users/view/:userId" element={<UserPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

// Third party
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
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
import { selectTheme } from './redux/themeSlice'

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
    secondary: {
      main: "#ec13c9"
    },
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
    primary: {
      main: "#0d0356"
    },
    divider: "#2e11bc",
    background: {
      default: "#160d3d",
      paper: "#160d3d",
    },
    text: {
      primary: '#fff',
      secondary: "#darkgray",
    },
  }
})


const App = (props) => {
  // From Redux
  const currentTheme = useSelector(selectTheme)

  return (
    <ThemeProvider theme={currentTheme ? themeLight : themeDark}>
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
          <Route path='*' element={<Navigate replace to=''/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

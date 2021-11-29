// Third party
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// Custom
import { selectTheme } from '../../redux/themeSlice'
import { selectAllPosts, postAdded } from '../../redux/postsSlice'

const AddPostForm = () => {
    // From Redux
    const currentTheme = useSelector(selectTheme)
    const allPosts = useSelector(selectAllPosts)
    const dispatch = useDispatch()

    // Local state
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    // Handler functions
    const onTitleChanged = (event) => {
        setTitle(event.target.value)
    }
    const onContentChanged = (event) => {
        setContent(event.target.value)
    }
    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded({
                id: new Date().toISOString(),
                title,
                content
            }))
        }
        setTitle("")
        setContent("")
    }

    return (
        <Box
            component="section"
            style={{
                marginTop: "1rem",
                maxWidth: "800px",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "0 1.5rem"
            }}
        >
            <Typography variant='h4' component='h2'>Add a New Post</Typography>
            <Box component="form">
                <Stack spacing={2}>
                    <TextField
                        name='postTitle'
                        id='postTitle'
                        label='Post Title'
                        placeholder='Post Title'
                        type='text'
                        required
                        value={title}
                        onChange={onTitleChanged}
                        sx={{
                            marginTop: "0.5rem",
                            
                            border: currentTheme? "none" : "1px solid gray",
                            borderRadius: currentTheme ? "none" : "7px",
                        }}
                    />
                    <TextField
                        name='postContent'
                        id='postContent'
                        label='Content'
                        placeholder='Post Content'
                        multiline
                        required
                        rows={5}
                        value={content}
                        onChange={onContentChanged}
                        sx={{
                            marginTop: "0.5rem",
                            
                            border: currentTheme? "none" : "1px solid gray",
                            borderRadius: currentTheme ? "none" : "7px",
                        }}
                    />
                    <Button
                        disableRipple
                        type='button'
                        variant="contained"
                        onClick={onSavePostClicked}
                        sx={{
                            "&:hover": {
                                background: "#ec13c9"
                            },
                            "&:active": {
                                background: "#ec13c9"
                            }
                        }}
                    >
                        Save Post
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default AddPostForm
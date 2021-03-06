// Third party
import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


// Custom
import { selectTheme } from '../../redux/themeSlice'
import { selectAllPosts, postUpdated } from '../../redux/postsSlice'

const EditPostForm = () => {
    const postId = useParams().postId
    const navigate = useNavigate()
    
    // From Redux
    const currentTheme = useSelector(selectTheme)
    const allPosts = useSelector(selectAllPosts)
    const dispatch = useDispatch()

    const existingPost = allPosts.find((post) => post.id === postId)
    
    // Local state initialized with existing post title & content
    // In case Post returns undefined, app doesn't crash and displays post not found page with back button
    const [title, setTitle] = useState(!existingPost ? " " : existingPost.title)
    const [content, setContent] = useState(!existingPost ? " " : existingPost.content)

    // Handler functions
    const onTitleChanged = (event) => {
        setTitle(event.target.value)
    }
    const onContentChanged = (event) => {
        setContent(event.target.value)
    }
    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdated({
                postId: postId,
                title,
                content
            }))
            navigate(`/posts/view/${postId}`) 
        }
        
    }

    if (!existingPost) {
        return (
            <Box
                component='section'
                sx={{
                    minWidth: "275px",
                    marginTop: "1rem",
                    maxWidth: "800px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: "0 1.5rem"
                }}
            >
                <Card
                    variant="outlined"
                    sx={{
                        marginTop: "0.5rem",
                        padding: "0.25rem 0.25rem",
                        border: "1px solid grey",
                        borderRadius: "7px",
                        margin: "auto",
                        textAlign: "center"
                    }}
                >
                    <CardContent>
                        <Typography variant="h5" component="h3">
                            Post not found!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant='contained'
                            color='primary'
                            component={Link}
                            to={`/`}
                            sx={{
                                margin: "auto",
                                "&:hover": {
                                background: "#ec13c9"
                                },
                                "&:active": {
                                background: "#ec13c9"
                                }
                            }}
                        >
                            Back
                        </Button>
                    </CardActions>
                </Card>
            </Box>
                
        )
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
            <Typography variant='h4' component='h2'>Edit Post</Typography>
            <Box component="form">
                <Stack spacing={2}>
                    <TextField
                        name='postTitle'
                        id='postTitle'
                        label='Post Title'
                        placeholder='Update post title'
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
                        placeholder='Update post Content'
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

export default EditPostForm
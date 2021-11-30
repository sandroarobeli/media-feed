// Third party
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

// Custom
import { selectAllPosts, postDeleted } from '../../redux/postsSlice'
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons';

const PostsList = () => {
    // From Redux
    const posts = useSelector(selectAllPosts)
    const dispatch = useDispatch()

    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    
    const renderedPosts = orderedPosts.map((post) => (
        <Box
            key={post.id}
            sx={{
                minWidth: "275px",
            }}
        >
            <Card
                variant="outlined"
                sx={{
                    marginTop: "0.5rem",
                    padding: "0.25rem 0.25rem",
                    border: "1px solid grey",
                    borderRadius: "7px",
                    margin: "auto"
                }}
            >
                <CardContent>
                    <Typography variant="h5" component="h3">
                        {post.title}
                    </Typography>
                    <PostAuthor userId={post.user} />
                    <TimeAgo timestamp={post.date} />
                    <ReactionButtons post={post}/>
                    <Typography variant="body1" component='p' sx={{marginTop: "0.75rem"}}>
                        {post.content.substring(0, 100)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Stack spacing={2} direction="row" sx={{margin: "auto"}}>
                        <Button
                            variant='contained'
                            color='primary'
                            component={Link}
                            to={`posts/view/${post.id}`}
                            sx={{
                                "&:hover": {
                                    background: "#ec13c9"
                                },
                                "&:active": {
                                    background: "#ec13c9"
                                }
                            }}
                        >
                            View 
                        </Button>
                        <Button
                            variant='contained'
                            color='primary'
                            component={Link}
                            to={`posts/edit/${post.id}`}
                            sx={{
                                "&:hover": {
                                    background: "#ec13c9"
                                },
                                "&:active": {
                                    background: "#ec13c9"
                                }
                            }}
                        >
                            Edit 
                        </Button>
                        <Button
                            variant='contained'
                            color='error'
                            onClick={() => dispatch(postDeleted({ postId: post.id }))}  
                            sx={{
                                "&:hover": {
                                    background: "#ec13c9"
                                },
                                "&:active": {
                                    background: "#ec13c9"
                                }
                            }}
                        >
                            Delete
                        </Button>
                    </Stack>
                </CardActions>
            </Card>
        </Box>
    ))

    return (
        <Box
            component="section"
            style={{
                margin: "1rem auto 3rem auto",
                maxWidth: "800px",
                padding: "0 1.5rem"
            }}
        >
            <Stack spacing={2}>
                <Typography variant='h4' component='h2'>Posts</Typography>
                {renderedPosts}
            </Stack>
        </Box>
    )
}

export default PostsList


 
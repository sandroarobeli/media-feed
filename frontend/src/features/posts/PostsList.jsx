// Third party
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

// Custom
import { selectAllPosts } from '../../redux/postsSlice'

const PostsList = () => {
    // From Redux
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map((post) => (
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
                            onClick=''   //'deletePost()'
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
                marginTop: "1rem",
                maxWidth: "800px",
                marginLeft: "auto",
                marginRight: "auto",
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


 
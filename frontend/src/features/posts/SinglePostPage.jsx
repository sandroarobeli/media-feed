// Third party
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';

const SinglePostPage = () => {
    const postId = useParams().postId
    
    // From Redux
    const post = useSelector((state) => state.posts.find((post) => post.id === postId))
        
    if (!post) {
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
                }}
            >
                <CardContent>
                    <Typography variant="h4" component="h2">
                        {post.title}
                    </Typography>
                    <Typography variant="body1" component='p' sx={{marginTop: "0.75rem"}}>
                        {post.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Stack spacing={2} direction="row">
                        <Button
                            variant='contained'
                            color='primary'
                            component={Link}
                            to={`../../posts/edit/${postId}`}
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
    )
}

export default SinglePostPage


   
    
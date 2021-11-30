// Third party
import React from 'react'
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography';

const PostAuthor = (props) => {
    const author = useSelector((state) => state.users.find((user) => user.id === props.userId))
    return (
        <Typography variant='body2' ><i>By {author ? author.name : 'Unknown'}</i></Typography>
    )
}

export default PostAuthor
// Third party
import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';

const PageNotFound = () => {
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
                    <Typography variant="h4" component="h2">
                       404 Page not found!
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

export default PageNotFound
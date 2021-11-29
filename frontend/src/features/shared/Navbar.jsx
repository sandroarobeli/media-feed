// Third party
import React, { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from "@mui/material/IconButton";
import BrightnessHighOutlinedIcon from '@mui/icons-material/BrightnessHighOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined'

// Custom
import { selectTheme, changeTheme } from '../../redux/themeSlice'

const LinkTab = props => {
    return (
        <Tab
            component={Link}
            disableRipple
            sx={{
                height: "5.5rem",
                margin: "auto",
                "&:hover": {
                    color: "#d1f4f9",
                },
            }}
            {...props}
        />
    )
}

const NavBar = () => {
    // From Redux
    const currentTheme = useSelector(selectTheme)
    const dispatch = useDispatch()

    // State management
    const [tabValue, setTabValue] = useState(0)

    // Handler functions
    const onTabChanged = (event, newValue) => {
        setTabValue(newValue)
    }
    const onThemeChanged = () => {
        dispatch(changeTheme())
    }

    return (
        <React.Fragment>
        <AppBar position='static' color='primary' sx={{ height: '5rem' }} >
            <Toolbar sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                <Tabs
                    centered
                    value={tabValue}
                    onChange={onTabChanged}
                    textColor='white'
                    indicatorColor='secondary'
                    sx={{
                        backgroundColor: 'primary',          
                        width: {
                            mobile: '50%',
                            tablet: '30%',
                            laptop: "20%"
                        },
                        marginRight: {
                            mobile: '0.5rem',
                            tablet: '2rem',
                            laptop: '3.5rem'
                        },
                        height: '5rem'
                    }}
                >
                    <LinkTab label='Posts' to='/' />
                    <LinkTab label='Users' to='/users' />
                </Tabs>
                <IconButton
                    edge='end'
                    color='inherit'
                    onClick={onThemeChanged}
                    sx={{
                        marginRight: '1rem',
                    }}
                    >
                        {
                        currentTheme ?
                            (<Brightness4OutlinedIcon  
                                sx={{ width: '2.5rem', height: '2.5rem'}}
                            />) :
                            (<BrightnessHighOutlinedIcon
                                sx={{ width: '2.5rem', height: '2.5rem'}}
                            />)
                        }
                </IconButton>
            </Toolbar>
            </AppBar>
            <Outlet />
        </React.Fragment>
    )
}


export default NavBar
// Third party
import React, { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from "@mui/material/IconButton";
import BrightnessLowOutlinedIcon from '@mui/icons-material/BrightnessLowOutlined';
import BrightnessHighOutlinedIcon from '@mui/icons-material/BrightnessHighOutlined';

// Custom


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
    // State management
    const [tabValue, setTabValue] = useState()

    // Handler functions
    const changeHandler = (event, newValue) => {
        setTabValue(newValue)
    }

    return (
        <React.Fragment>
        <AppBar position='static' color='primary' sx={{ height: '5rem' }} >
            <Toolbar sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                <Tabs
                    centered
                    value={tabValue}
                    onChange={changeHandler}
                    textColor='white'
                    indicatorColor='secondary'
                    sx={{
                        backgroundColor: 'primary',          
                        width: "20%",
                        marginRight: '5rem',
                        height: '5rem'
                    }}
                >
                    <LinkTab label='Posts' to='' />
                    <LinkTab label='Users' to='' />
                </Tabs>
                <IconButton
                    edge='end'
                    color='inherit'
                    onClick='' // {themeSwitchHandler}
                    sx={{
                        marginRight: '1rem',
                    }}
                >
                    <BrightnessLowOutlinedIcon // swaps with BrightHigh depending on Theme 
                        sx={{ width: '2.5rem', height: '2.5rem'}}
                    />
                </IconButton>
            </Toolbar>
            </AppBar>
            <Outlet />
        </React.Fragment>
    )
}


export default NavBar
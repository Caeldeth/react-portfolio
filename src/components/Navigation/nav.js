import React from "react";
import { Stack, Toolbar, Typography, Box, Button } from "@mui/material";
import bg from "../../assets/cover/header-background.jpg"

function Nav(props) {
    const {
        navElements = [],
        setCurrentNav,
        currentNav,
    } = props

    return (
        <header>
            <Box sx={{ backgroundImage: `url(${bg})` }}>
                <Stack direction="row" justifyContent="space-between">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h4"
                            component="div"
                            noWrap
                            sx={{ mr: 2, ml: 2, display: { xs: "none", md: "flex" } }}
                            color="#FFFFFF"
                        >
                            Thomas Cole
                        </Typography>
                    </Toolbar>
                    <Toolbar>
                        {navElements.map ( (element) => 
                        <Button sx={{ 
                            color: "#FFFFFF",                 
                            '&:hover': { color: '#FFBF00', }, }} 
                            variant="text" 
                            className={`col ${currentNav === element.name && 'navActive'}`}
                            key={element.name}
                            onClick={() => { setCurrentNav(element)}}
                            >
                                {element.name}
                        </Button>
                        )}
                    </Toolbar>
                </Stack>
            </Box>
        </header>
    );
}

export default Nav;

/*
                        <Button sx={{ 
                            color: "#FFFFFF",                 
                            '&:hover': { color: '#FFBF00', }, }} 
                            variant="text"
                            href="/portfolio">
                            Portfolio
                        </Button>
                        <Button sx={{ 
                            color: "#FFFFFF",                 
                            '&:hover': { color: '#FFBF00', }, }} 
                            variant="text"
                            href="/resume">
                            Resume
                        </Button>
                        <Button sx={{ 
                            color: "#FFFFFF",                 
                            '&:hover': { color: '#FFBF00', }, }} 
                            variant="text"
                            href="/contact">
                            Contact
                        </Button>
*/
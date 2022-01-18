import React from "react";
import { Link } from "react-router-dom";
import { Stack, Toolbar, Typography, Box, Button } from "@mui/material";
import bg from "../../assets/cover/header-background.jpg"

function Nav() {
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
                        >
                            Thomas Cole
                        </Typography>
                    </Toolbar>
                    <Toolbar>
                        <Button sx={{ color: "white" }} variant="text" href="/about">About</Button>
                        <Button sx={{ color: "white" }} variant="text" href="/portfolio">Portfolio</Button>
                        <Button sx={{ color: "white" }} variant="text" href="/resume">Resume</Button>
                        <Button sx={{ color: "white" }} variant="text" href="/contact">Contact</Button>
                    </Toolbar>
                </Stack>
            </Box>
        </header>
    );
}

export default Nav;

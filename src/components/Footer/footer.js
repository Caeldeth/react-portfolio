import React from "react";
import { Stack, Toolbar, Typography, Box, Paper } from "@mui/material";
import bg from "../../assets/cover/header-background.jpg"
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
    return (
        <Box sx={{ backgroundImage: `url(${bg})` }}>
        <Stack direction="row" justifyContent="space-evenly" sx={{ alignItems: 'center' }} >
            <Toolbar>
            <Paper elevation={0} sx={{ mr: 10, ml: 10, mt: .5, }}>
                    <a href="mailto:tacolejr@gmail.com" target="_blank" rel="noreferrer">
                        <EmailIcon sx={{ fontSize: 50, border: 1 }} />
                    </a>
                </Paper>
                <Paper elevation={0} sx={{ mr: 10, ml: 10, mt: .5, }}>
                    <a href="http://github.com/caeldeth" target="_blank" rel="noreferrer">
                        <GitHubIcon sx={{ fontSize: 50, border: 1, }} />
                    </a>
                </Paper>
                <Paper elevation={0} sx={{ mr: 10, ml: 10, mt: .5, }}>
                    <a href="http://linkedin.com" target="_blank" rel="noreferrer">
                        <LinkedInIcon sx={{ fontSize: 50, border: 1 }} />
                    </a>
                </Paper>
            </Toolbar>
        </Stack>
    </Box>        
    );
}

export default Footer;

import React from "react";
import { Grid, Paper } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Paper>
                    <a href="mailto:tacolejr@gmail.com" target="_blank" rel="noreferrer">
                        <EmailIcon></EmailIcon>
                    </a>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper>
                    
                    <a href="http://github.com/caeldeth" target="_blank" rel="noreferrer">
                        <GitHubIcon></GitHubIcon>
                    </a>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper>
                    <a href="http://linkedin.com" target="_blank" rel="noreferrer">
                        <LinkedInIcon></LinkedInIcon>
                    </a>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Footer;

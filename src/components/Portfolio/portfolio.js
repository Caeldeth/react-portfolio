import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import ProjectCard from '../ProjectCard/projectCard';

function Portfolio() {
    return (
        <section>
            <Box 
            sx={{
                width: .9,
                height: "auto",
                backgroundColor: '#004953',
                margin: 'auto',
                mt: 10,
                mb: 10,
                pb: 2,
                pt: 2,
            }}>
            <Container sx={{ borderBottom: 2, borderBottomColor: '#FFFFFF' }}>
                <Typography
                    variant="h3"
                    component="div"
                    noWrap
                    sx={{ mr: 2, ml: 2, display: { xs: "none", md: "flex" }, justifyContent: 'center' }}
                    color="#FFFFFF"
                >
                    Development Projects
                </Typography>
            </Container>
            <Container>
                <ProjectCard/>
            </Container>
            </Box>
        </section>
    );
}

export default Portfolio;
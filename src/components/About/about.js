import React from 'react';
import { Box, Paper, Container, Typography } from "@mui/material";

function About() {
    return (
        <section>
            <Box 
            sx={{
                width: .9,
                height: "auto",
                backgroundColor: 'primary.dark',
                margin: 'auto',
                mt: 10,
                mb: 10,
                pb: 2,
                pt: 2,
            }}>
            <Container sx={{ borderBottom: 2, borderBottomColor: 'white' }}>
                <Typography
                    variant="h3"
                    component="div"
                    noWrap
                    sx={{ mr: 2, ml: 2, display: { xs: "none", md: "flex" }, justifyContent: 'center' }}
                    color="white"
                >
                    About Me
                </Typography>
            </Container>
            <Container>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                In hac habitasse platea dictumst quisque sagittis purus sit. Ipsum a arcu cursus vitae congue mauris. Vel fringilla est ullamcorper eget. 
                Porttitor lacus luctus accumsan tortor. Vitae aliquet nec ullamcorper sit amet risus. Consequat id porta nibh venenatis cras sed felis eget. 
                Dui accumsan sit amet nulla facilisi morbi. Convallis posuere morbi leo urna. Nibh tellus molestie nunc non blandit massa enim nec. 
                Ut etiam sit amet nisl purus in mollis nunc sed.
                </p>
                <p>
                Sed cras ornare arcu dui vivamus. Velit laoreet id donec ultrices tincidunt. Morbi tristique senectus et netus et malesuada fames ac turpis. 
                Aliquet porttitor lacus luctus accumsan tortor. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tellus mauris a diam maecenas 
                sed enim ut sem. Urna et pharetra pharetra massa. Nulla pharetra diam sit amet. Ultrices tincidunt arcu non sodales neque sodales. Posuere 
                sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Pellentesque habitant morbi tristique senectus. Ullamcorper dignissim cras 
                tincidunt lobortis feugiat vivamus. Leo urna molestie at elementum eu. Nec sagittis aliquam malesuada bibendum.
                </p>
            </Container>
            </Box>
        </section>
    );
}

export default About;
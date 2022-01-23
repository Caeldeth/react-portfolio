import { React } from "react";
import { Card, CardActions, CardActionArea, Button, CardMedia, Grid, Typography } from "@mui/material";
import itempest from "../../assets/images/tempest.jpg";
import igoblin from "../../assets/images/task-goblin.png";
import iquiz from "../../assets/images/quiz.jpg";
import ifast from "../../assets/images/fast.jpg";
import irunbuddy from "../../assets/images/runbuddy.png";
import ihoriseon from "../../assets/images/horiseon.jpg";
import iredfox from "../../assets/images/redfox.png";
import ibloggrs from "../../assets/images/bloggrs.png";
import inotely from "../../assets/images/notely.jpg";
import istaff from "../../assets/images/staffmatrix.png";
import icapital from "../../assets/images/capital.png";
import ifinder from "../../assets/images/finder.png";
import isearch from "../../assets/images/search.png";

function ProjectCard() {
    const projects = [
        {
            name: "Tempest Weather App",
            deployedAt: "https://caeldeth.github.io/tempest/",
            githubRepo: "https://github.com/Caeldeth/tempest",
            classId: "tempest",
            image: itempest,
            alt: "tempest app"
        },
        {
            name: "Task Goblin",
            deployedAt: "https://",
            githubRepo: "https://github.com/Caeldeth/task-goblin",
            classId: "goblin",
            image: igoblin,
            alt: "task goblin"
        },
        {
            name: "Quiz Quiz Go",
            deployedAt: "https://caeldeth.github.io/quiz-quiz-go/",
            githubRepo: "https://github.com/Caeldeth/quiz-quiz-go",
            classId: "quiz",
            image: iquiz,
            alt: "quiz quiz go"

        },
        {
            name: "Fast Pass",
            deployedAt: "https://caeldeth.github.io/fast-pass/",
            githubRepo: "https://github.com/Caeldeth/fast-pass",
            classId: "fastpass",
            image: ifast,
            alt: "fast pass"
            
        },
        {
            name: "RunBuddy",
            deployedAt: "https://caeldeth.github.io/run-buddy/",
            githubRepo: "https://github.com/Caeldeth/run-buddy",
            classId: "runbuddy",
            image: irunbuddy,
            alt: "runbuddy"
            
        },
        {
            name: "Horiseon Web",
            deployedAt: "https://caeldeth.github.io/horiseon-web/index.html",
            githubRepo: "https://github.com/Caeldeth/horiseon-web",
            classId: "horiseon",
            image: ihoriseon,
            alt: "Horiseon"
        },
        {
            name: "redfoxTracker",
            deployedAt: "https://ancient-scrubland-78383.herokuapp.com/",
            githubRepo: "https://github.com/Caeldeth/redfoxtracker",
            classId: "redfox",
            image: iredfox,
            alt: "redfox app"
        },
        {
            name: "Bloggrs",
            deployedAt: "https://vast-inlet-23068.herokuapp.com/",
            githubRepo: "https://github.com/Caeldeth/bloggrs",
            classId: "bloggrs",
            image: ibloggrs,
            alt: "bloggrs app"

        },
        {
            name: "Notely",
            deployedAt: "https://sheltered-thicket-24103.herokuapp.com/",
            githubRepo: "https://github.com/Caeldeth/notely",
            classId: "notely",
            image: inotely,
            alt: "notely"
        },
        {
            name: "StaffMatrix - Terminal",
            deployedAt: "https://github.com/Caeldeth/staffmatrix#usage",
            githubRepo: "https://github.com/Caeldeth/staffmatrix",
            classId: "staffmatrix",
            image: istaff,
            alt: "staffmatrix"
        },
        {
            name: "Capital Opulence",
            deployedAt: "https://capital-opulence.herokuapp.com/",
            githubRepo: "https://github.com/Collin-W/Capital-Opulence",
            classId: "capital",
            image: icapital,
            alt: "capital opulence"
        },
        {
            name: "Movie Finder",
            deployedAt: "https://github.com/Caeldeth/staffmatrix#usage",
            githubRepo: "https://cassie-s.github.io/movie-finder/",
            classId: "finder",
            image: ifinder,
            alt: "movie finder"
        },
        {
            name: "Google Book Search",
            deployedAt: "https://hidden-earth-31394.herokuapp.com/",
            githubRepo: "https://github.com/Caeldeth/book-search",
            classId: "search",
            image: isearch,
            alt: "book search"
        },

/* Template
        {
            name: "",
            deployedAt: "",
            githubRepo: "https://github.com/Caeldeth/",
            classId: "",
            image: "../../assets/images/ .png",
            alt: ""
        },
*/
    ];

    return (
        <section>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                {projects.map((project) => (
                    <Grid item xs={4} key={project.name}>
                        <Card
                            sx={{
                                maxWidth: 400,
                                "&:hover": { opacity: 0.7, border: 2, borderColor: "#FF69B4" },
                                border: 2,
                                borderColor: "#87cefa"
                            }}
                        >
                            <CardActionArea>
                                <CardMedia component="img" height="200" image={project.image} alt={project.alt} />
                                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', background: "#202020" }}>
                                    <Typography variant="button" sx={{ color: "#FFFFFF" }}>{project.name}</Typography>
                                    <div sx={{ display: 'flex', width: "100%", flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Button href={project.deployedAt} 
                                        sx={{ 
                                        color: "#FFFFFF",                 
                                        '&:hover': { color: '#FFBF00', }, }} 
                                        variant="text">
                                            Live App
                                    </Button>
                                    <Button href={project.githubRepo} 
                                        sx={{ 
                                        color: "#FFFFFF",                 
                                        '&:hover': { color: '#FFBF00', }, }} 
                                        variant="text">
                                            GitHub
                                        </Button>
                                    </div>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
}

export default ProjectCard;

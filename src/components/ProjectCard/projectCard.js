import { React } from "react";
import { Card, CardActions, CardActionArea, Button, CardMedia, Grid, Typography } from "@mui/material";
import bg from "../../assets/images/task-goblin.png";
function ProjectCard() {
    const projects = [
        {
            name: "Tempest Weather App",
            deployedAt: "https://caeldeth.github.io/tempest/",
            githubRepo: "https://github.com/Caeldeth/tempest",
            classId: "tempest",
        },
        {
            name: "Task Goblin",
            deployedAt: "https://",
            githubRepo: "https://github.com/Caeldeth/task-goblin",
            classId: "goblin",
        },
        {
            name: "Quiz Quiz Go",
            deployedAt: "https://caeldeth.github.io/quiz-quiz-go/",
            githubRepo: "https://github.com/Caeldeth/quiz-quiz-go",
            classId: "quiz",
        },
        {
            name: "Fast Pass",
            deployedAt: "https://caeldeth.github.io/fast-pass/",
            githubRepo: "https://github.com/Caeldeth/fast-pass",
            classId: "fastpass",
        },
        {
            name: "RunBuddy",
            deployedAt: "https://caeldeth.github.io/run-buddy/",
            githubRepo: "https://github.com/Caeldeth/run-buddy",
            classId: "runbuddy",
        },
        {
            name: "Horiseon Web",
            deployedAt: "https://caeldeth.github.io/horiseon-web/index.html",
            githubRepo: "https://github.com/Caeldeth/horiseon-web",
            classId: "horiseon",
        },
        {
            name: "redfoxTracker",
            deployedAt: "https://vast-plateau-01803.herokuapp.com/",
            githubRepo: "https://github.com/Caeldeth/redfoxtracker",
            classId: "redfox",
        },
        {
            name: "Bloggrs",
            deployedAt: "https://vast-inlet-23068.herokuapp.com/",
            githubRepo: "https://github.com/Caeldeth/bloggrs",
            classId: "bloggrs",
        },
        {
            name: "Notely",
            deployedAt: "https://sheltered-thicket-24103.herokuapp.com/",
            githubRepo: "https://github.com/Caeldeth/notely",
            classId: "notely",
        },
        {
            name: "StaffMatrix - Terminal",
            deployedAt: "https://github.com/Caeldeth/staffmatrix#usage",
            githubRepo: "https://github.com/Caeldeth/staffmatrix",
            classId: "staffmatrix",
        },
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
                                <CardMedia component="img" height="200" image={bg} alt="green goblin" />
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

import { React } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    Chip,
    Card,
    CardActions,
    CardContent,
    Grid,
    Button,
    Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import discordIcon from '../../assets/images/discord.png'

const onDownload = () => {
    const link = document.createElement("a");
    link.download = 'sample.pdf'
    link.href = "../../assets/images/sample.pdf";
    link.click();
}

function Resume() {
    return (
        <section>
            <Box sx={{ width: 0.9, margin: "auto", display: "flex", justifyContent: "center", }}>
                <Card sx={{ width: "85%" }}>
                    <CardContent>
                        <Typography align="center" variant="h5" component="div">Thomas Cole</Typography>
                        <Typography align="center" variant="body2" color="text.secondary">Contact Information</Typography>
                    </CardContent>
                    <CardActions>
                    <Box sx={{width: "100%"}}>
                        <Grid container spacing={1} alignItems="center" justifyContent="space-around">
                            <Grid item xs={12} alignItems="center">
                            <Tooltip title="Please email for a complete resume" placement="top">
                            <Button onClick={onDownload} sx={{margin: "0 auto", display: "block"}}>Download Resume</Button>
                            </Tooltip>
                            </Grid>
                            <Grid item xs={2}>
                            <Typography><LocalPhoneIcon/>555-555-5555</Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <Typography><EmailIcon/>tacolejr@gmail.com</Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <Typography><GitHubIcon/>Caeldeth</Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <Typography><LinkedInIcon/>LinkedIn.com</Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <Typography><img width="24" height="24" src={discordIcon} alt="discord"/>discordId</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    </CardActions>
                </Card>
            </Box>
            <Box sx={{ width: 0.75, margin: "auto" }}>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Summary</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Self-motivated project manager with over 4 years of experience managing multiple projects
                            simultaneously. Comfortable presenting to executives and front-line associates, leveraging
                            my background as a bartender, counselor and call center supervisor to build trust and
                            increase engagement. Major experience lies in a versatile approach to problem solving with
                            ready enthusiasm to leverage software skills to reduce administrative work and deliver world
                            class results. Highly skilled in leading cross-functional teams, needs assessment,
                            communicating deadlines, and completing projects under budget and within scope.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Education</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="University of Minnesota - Twin Cities"
                                    secondary="Bachelor of Arts, Psychology (2011)"
                                ></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="University of Minnesota - Twin Cities"
                                    secondary="Full Stack Coding Bootcamp (2022)"
                                ></ListItemText>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Skills</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Chip label="Office 365/G Suite" color="primary" sx={{ margin: 1 }} />
                        <Chip label="HTML 5/CSS" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Risk Management" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Process Improvement" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Emotional Intelligence" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Collaboration" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Jira/Confluence" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Javascript/Node" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Cost Management" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Automation" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Critical Thinking" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Conflict Resolution" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Git/Github" color="primary" sx={{ margin: 1 }} />
                        <Chip label="XML" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Data Analysis" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Leadership" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Self-Confidence" color="primary" sx={{ margin: 1 }} />
                        <Chip label="Planning" color="primary" sx={{ margin: 1 }} />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography>Professional Experience</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="The Eris Corporation"
                                    secondary="Project Manager/Content Designer"
                                ></ListItemText>
                            </ListItem>
                            <ListItem sx={{ ml: 4 }}>
                                <Box>
                                    When: 7/2021 - Now <br />
                                    Where: Minneapolis, MN (Remote) <br />
                                    Responsibilities: <br />
                                    &ensp;• Develop levels & world building for unannounced MMORPG <br />
                                    &ensp;• Develop tooling for content creation <br />
                                    &ensp;• Manage release sprints during project alpha testing <br />
                                </Box>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="RiverSource Life Insurance Company"
                                    secondary="Project Manager, Annuities"
                                ></ListItemText>
                            </ListItem>
                            <ListItem sx={{ ml: 4 }}>
                                <Box>
                                    When: 3/2017 - 7/2021 <br />
                                    Where: Minneapolis, MN <br />
                                    Responsibilities: <br />
                                    <br />
                                    &ensp;Project & Release Management <br />
                                    &ensp;&ensp;• Managed the successful implementation of ~100 small projects/year{" "}
                                    <br />
                                    &ensp;&ensp;• Directed budget of $6.78m within +/- 3% variance, with monthly CI/CD{" "}
                                    <br />
                                    &ensp;&ensp;• Responsible for all enhancements & maintenance for 6 policy
                                    administration platforms, and all downstream systems <br />
                                    &ensp;&ensp;• Facilitated weekly meetings with executive leadership for project
                                    status updates and portfolio prioritization <br />
                                    &ensp;&ensp;• Managed projects using both Waterfall and Agile methodologies <br />
                                    &ensp;&ensp;• Created and presented materials for use in Investment Review Boards
                                    (IRB) and Leader Steering Committees <br />
                                    <br />
                                    &ensp;Relationship Building <br />
                                    &ensp;&ensp;• Delivered “Lunch and Learn” seminars on the company’s product line to
                                    provide a simplified view of how Annuities work to the PMO <br />
                                    &ensp;&ensp;• Refreshed and redesigned all deliverables to meet company branding,
                                    including launching a self-service SharePoint <br />
                                    &ensp;&ensp;• Built and maintained relationships across a highly matrixed
                                    organization <br />
                                    <br />
                                    &ensp;Product Management
                                    <br />
                                    &ensp;&ensp;• Responsible for “BAU channel” vision, portfolio, value proposition,
                                    roadmap, backlog and implementation
                                    <br />
                                    &ensp;&ensp;• Defined and introduced waterfall-agile hybrid processes to previously
                                    waterfall only approach
                                    <br />
                                    &ensp;&ensp;• Increased business participation in channel by 30% through roadshows,
                                    user engagement and executive updates
                                    <br />
                                    &ensp;&ensp;• Regularly identified opportunities to decrease scope and pursue
                                    efforts as fast followers to achieve minimum viable product needs
                                    <br />
                                </Box>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="RiverSource Life Insurance Company"
                                    secondary="Customer Expert-L, Annuities"
                                ></ListItemText>
                            </ListItem>
                            <ListItem sx={{ ml: 4 }}>
                                <Box>
                                    When: 3/2013 - 3/2017 <br />
                                    Where: Minneapolis, MN <br />
                                    Responsibilities: <br />
                                    <br />
                                    &ensp;• Responsible for training new hires with no financial background in complex
                                    Annuity service and new business
                                    <br />
                                    &ensp;• Resolved complex field agent escalations and service issues
                                    <br />
                                    &ensp;• Subject matter expert for Qualified Plans (403b/401a/SEP/Simple) and Ebix’s
                                    AnnuityNet platform
                                    <br />
                                </Box>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Ameriprise Financial"
                                    secondary="Financial Advisor"
                                ></ListItemText>
                            </ListItem>
                            <ListItem sx={{ ml: 4 }}>
                                <Box>
                                    When: 4/2012 - 1/2013 <br />
                                    Where: Minneapolis, MN <br />
                                    Responsibilities: <br />
                                    <br />
                                    &ensp;• FINRA Series 7 & 63 licensed and Insurance Health/Life LOA
                                    <br />
                                    &ensp;• Managed a book of 60 clients
                                    <br />
                                    &ensp;• Created investment portfolios, Life & Annuity proposals for team of 10
                                    <br />
                                    &ensp;• Tutored new hires to pass licensing exams
                                    <br />
                                </Box>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                    >
                        <Typography>Sample Projects</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Credit Card Decommission"
                                ></ListItemText>
                            </ListItem>
                            <ListItem sx={{ ml: 4 }}>
                                <Box>
                                &ensp;•	Managed the sunset of a 20-year program of credit card acceptance throughout company<br/>
                                &ensp;•	Expertly navigated vendor challenges<br/>
                                &ensp;•	Weekly meetings with Executive Vice Presidents<br/>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="WordPerfect to OpenText Extstream"
                                ></ListItemText>
                            </ListItem>
                            <ListItem sx={{ ml: 4 }}>
                                <Box>
                                &ensp;•	Migrated legacy customer correspondence from DOS WordPerfect 5.1 to OpenText due to incompatibility with Windows Server 2019<br/>
                                &ensp;•	3-year project with a $3m budget<br/>
                                &ensp;•	Overcame multiple challenges uncovered with migrating 30-year-old software<br/>
                                </Box>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </section>
    );
}

export default Resume;

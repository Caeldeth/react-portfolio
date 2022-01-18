import { React } from "react";
import {
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
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import discordIcon from "../../assets/images/discord.png";

const onDownload = () => {
    const link = document.createElement("a");
    link.download = "sample.pdf";
    link.href = "../../assets/images/sample.pdf";
    link.click();
};

function Resume() {
    return (
        <section>
            <Box
                sx={{
                    width: 0.9,
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#202020",
                }}
            >
                <Card sx={{ width: "85%", backgroundColor: "#004953" }}>
                    <CardContent>
                        <Typography align="center" variant="h5" component="div" sx={{ color: "#FFFFFF" }}>
                            Thomas Cole
                        </Typography>
                        <Typography align="center" variant="body2" sx={{ color: "#FFFFFF" }}>
                            Contact Information
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box sx={{ width: "100%" }}>
                            <Grid container spacing={1} alignItems="center" justifyContent="space-around">
                                <Grid item xs={12} alignItems="center">
                                    <Tooltip title="Please email for a complete resume" placement="top">
                                        <Button
                                            onClick={onDownload}
                                            sx={{
                                                margin: "0 auto",
                                                display: "block",
                                                color: "#FFFFFF",
                                                "&:hover": { color: "#FFBF00" },
                                            }}
                                        >
                                            Download Sample resume
                                        </Button>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography align="left" sx={{ color: "#FFFFFF" }}>
                                        <LocalPhoneIcon
                                            sx={{ position: "relative", top: "5px", bottom: "5px", color: "#FFFFFF" }}
                                        />
                                        612-361-9755
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography align="center" sx={{ color: "#FFFFFF" }}>
                                        <EmailIcon
                                            sx={{ position: "relative", top: "5px", bottom: "5px", color: "#FFFFFF" }}
                                        />
                                        tacolejr@gmail.com
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography align="center" sx={{ color: "#FFFFFF" }}>
                                        <GitHubIcon
                                            sx={{ position: "relative", top: "5px", bottom: "5px", color: "#FFFFFF" }}
                                        />
                                        Caeldeth
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography align="center" sx={{ color: "#FFFFFF" }}>
                                        <LinkedInIcon
                                            sx={{ position: "relative", top: "5px", bottom: "5px", color: "#FFFFFF" }}
                                        />
                                        LinkedIn.com
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography align="right" sx={{ color: "#FFFFFF" }}>
                                        <img
                                            width="24"
                                            height="24"
                                            src={discordIcon}
                                            alt="discord"
                                            style={{ right: 2, position: "relative", top: "7px", bottom: "7px" }}
                                        />
                                        discordId
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
            <Box sx={{ width: 0.75, margin: "auto", mt: 2 }}>
                <Accordion defaultExpanded sx={{ background: "#202020", mb: 5 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                            backgroundColor: "#264348",
                            color: "#FFFFFF",
                            borderBottom: "1px solid #12738E",
                            borderColor: "#87cefa",
                            marginBottom: -3,
                            borderRadius: "30px 0px 30px 0",
                            minHeight: 56,
                        }}
                    >
                        <Typography>Summary</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            backgroundColor: "#71797E",
                            padding: 4,
                            color: "#FFFFFF",
                        }}
                    >
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
                <Accordion sx={{ background: "#202020", mb: 5 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{
                            backgroundColor: "#264348",
                            color: "#FFFFFF",
                            borderBottom: "1px solid #12738E",
                            borderColor: "#87cefa",
                            marginBottom: -3,
                            borderRadius: "30px 0px 30px 0",
                            minHeight: 56,
                        }}
                    >
                        <Typography>Education</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            backgroundColor: "#71797E",
                            padding: 4,
                            color: "#FFFFFF",
                        }}
                    >
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
                <Accordion sx={{ background: "#202020", mb: 5 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        sx={{
                            backgroundColor: "#264348",
                            color: "#FFFFFF",
                            borderBottom: "1px solid #12738E",
                            borderColor: "#87cefa",
                            marginBottom: -3,
                            borderRadius: "30px 0px 30px 0",
                            minHeight: 56,
                        }}
                    >
                        <Typography>Skills</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            backgroundColor: "#71797E",
                            padding: 4,
                            color: "#FFFFFF",
                        }}
                    >
                        <Chip label="Office 365/G Suite" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="HTML 5/CSS" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Risk Management" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Process Improvement" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Emotional Intelligence" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Collaboration" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Jira/Confluence" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Javascript/Node" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Cost Management" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Automation" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Critical Thinking" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Conflict Resolution" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Git/Github" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="XML" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Data Analysis" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Leadership" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Self-Confidence" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                        <Chip label="Planning" sx={{ margin: 1, backgroundColor: "#20b2aa", color: "white" }} />
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ background: "#202020", mb: 5 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                        sx={{
                            backgroundColor: "#264348",
                            color: "#FFFFFF",
                            borderBottom: "1px solid #12738E",
                            borderColor: "#87cefa",
                            marginBottom: -3,
                            borderRadius: "30px 0px 30px 0",
                            minHeight: 56,
                        }}
                    >
                        <Typography>Professional Experience</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            backgroundColor: "#71797E",
                            padding: 4,
                            color: "#FFFFFF",
                        }}
                    >
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
                <Accordion sx={{ background: "#202020", mb: 3 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                        sx={{
                            backgroundColor: "#264348",
                            color: "#FFFFFF",
                            borderBottom: "1px solid #12738E",
                            borderColor: "#87cefa",
                            marginBottom: -3,
                            borderRadius: "30px 0px 30px 0",
                            minHeight: 56,
                        }}
                    >
                        <Typography>Sample Projects</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            backgroundColor: "#71797E",
                            padding: 4,
                            color: "#FFFFFF",
                        }}
                    >
                        <List>
                            <ListItem>
                                <ListItemText primary="Credit Card Decommission"></ListItemText>
                            </ListItem>
                            <ListItem sx={{ ml: 4 }}>
                                <Box>
                                    &ensp;• Managed the sunset of a 20-year program of credit card acceptance throughout
                                    company
                                    <br />
                                    &ensp;• Expertly navigated vendor challenges
                                    <br />
                                    &ensp;• Weekly meetings with Executive Vice Presidents
                                    <br />
                                </Box>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="WordPerfect to OpenText Extstream"></ListItemText>
                            </ListItem>
                            <ListItem sx={{ ml: 4 }}>
                                <Box>
                                    &ensp;• Migrated legacy customer correspondence from DOS WordPerfect 5.1 to OpenText
                                    due to incompatibility with Windows Server 2019
                                    <br />
                                    &ensp;• 3-year project with a $3m budget
                                    <br />
                                    &ensp;• Overcame multiple challenges uncovered with migrating 30-year-old software
                                    <br />
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

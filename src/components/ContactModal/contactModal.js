import React, { useState, } from "react";
import { validateEmail } from "../../utils/helpers";
import { Box, TextField, Typography, Button, Container } from "@mui/material";

function ContactModal() {
    const [formState, setFormState] = useState({ inputName: "", inputEmail: "", inputMsg: "" });
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [msgError, setMsgError] = useState("");

    function handleBlur(event) {
        if (event.target.id === "inputEmail") {
            const isValid = validateEmail(event.target.value);

            if (!isValid) {
                setEmailError("Your Email is Invalid");
            } else {
                setEmailError("");
            }
        }

        if (event.target.id === "inputName" && !event.target.value.length) {
            setNameError(`${event.target.name} is Required`);
        } else {
            setNameError("");
        }

        if (event.target.id === "inputMsg" && !event.target.value.length) {
            setMsgError(`${event.target.name} is Required`);
        } else {
            setMsgError("");
        }

        if (!nameError && !emailError && !msgError) {
            setFormState({ ...formState, [event.target.id]: event.target.value });
        }
    }

    //submit the contact form console.log it for not since there is no backend
    function handleSubmit(event) {
        event.preventDefault();
        if (nameError || emailError || msgError) {
            alert("Please complete required fields");
            return;
        } else {
            setFormState({ ...formState, [event.target.id]: event.target.value });
            console.log(formState);
        }
    }

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                mb: 4
            }}
        >
            <Box
                component="form"
                autoComplete="off"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                    display: "flex",
                    flexDirection: "column",
                    mt: 10,
                    width: 0.6,
                    height: "auto",
                    backgroundColor: "#004953",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                }}
            >
                <Container sx={{ borderBottom: 2, borderBottomColor: '#FFFFFF', width: .9 }}>
                <Typography
                    variant="h3"
                    component="div"
                    noWrap
                    sx={{ mr: 2, ml: 2, display: { xs: "none", md: "flex" }, justifyContent: 'center', }}
                    color="#FFFFFF"
                >
                Contact Me</Typography>
                </Container>
                <TextField
                    required
                    label="Name"
                    id="inputName"
                    name="Name"
                    type="text"
                    error={nameError.length === 0 ? false : true}
                    helperText={nameError}
                    InputLabelProps={{ 
                        shrink: true, 
                        style: { color: '#FFFFFF'}
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            borderColor: "#FFFFFF"
                          }
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "#FFBF00"
                          }
                        }
                    }}
                    onBlur={handleBlur}
                />
                <TextField
                    required
                    label="Email"
                    id="inputEmail"
                    type="email"
                    error={emailError.length === 0 ? false : true}
                    helperText={emailError}
                    InputLabelProps={{ 
                        shrink: true, 
                        style: { color: '#FFFFFF'}
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            borderColor: "#FFFFFF"
                          }
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "#FFBF00"
                          }
                        }
                    }}
                    onBlur={handleBlur}
                />
                <TextField
                    required
                    label="Message"
                    name="Message"
                    id="inputMsg"
                    type="text"
                    multiline
                    rows={5}
                    InputLabelProps={{ 
                        shrink: true, 
                        style: { color: '#FFFFFF'}
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            borderColor: "#FFFFFF"
                          }
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "#FFBF00"
                          }
                        }
                    }}
                    error={msgError.length === 0 ? false : true}
                    helperText={msgError}
                    onBlur={handleBlur}
                />
                <Button 
                    variant="contained" 
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: "#43b3ae",
                        '&:hover': { color: '#FFBF00', },
                        mb: 1
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}

export default ContactModal;

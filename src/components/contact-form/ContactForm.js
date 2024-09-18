import { useRef, useState } from "react";
import { styled } from '@mui/material/styles';
import { TextField, Button, Typography, CircularProgress } from "@mui/material";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Footer from "../footer/Footer";

const FormContainer = styled('div')(({ theme }) => ({
    maxWidth: '400px',
    margin: 'auto',
}));

const StyledForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
}));

const SubmitButton = styled(Button)`
  align-self: flex-start;
`;

const ResultText = styled(Typography)(({ theme, submitted }) => ({
    textAlign: 'center',
    color: '#fff',
    backgroundColor: submitted === "true" ? '#4caf50' : '#f44336',
    padding: '12px',
    borderRadius: '4px',
}));

export default function ContactForm({ sectionId }) {
    const [result, setResult] = useState("");
    const [captchaToken, setCaptchaToken] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null);

    const onHCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        // Extract form field values
        const name = event.target.name.value.trim();
        const email = event.target.email.value.trim();
        const message = event.target.message.value.trim();

        // Validate form fields
        if (name === "") {
            setNameError(true);
            setResult("Name field cannot be blank.");
            setIsLoading(false);
            return;
        }
        if (email === "") {
            setEmailError(true);
            setResult("Email field cannot be blank.");
            setIsLoading(false);
            return;
        }
        if (message === "") {
            setMessageError(true);
            setResult("Message field cannot be blank.");
            setIsLoading(false);
            return;
        }
        if (captchaToken === "") {
            setResult("Please complete the captcha.");
            setIsLoading(false);
            return;
        }

        // Create FormData object
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        formData.append("access_key", "0f7023bd-8d64-43e5-b661-f2a37ccbe574");
        formData.append("h-captcha-response", captchaToken);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            setIsSubmitted(true);
            setIsLoading(false);
            formRef.current.reset(); // Reset the form
        } else {
            console.log("Error", data);
            setResult(data.message);
            setIsLoading(false);
        }
    };

    return (
        <div id={sectionId}>
            <FormContainer>
                <Typography variant="h5" gutterBottom>
                    Contact <span style={{ fontWeight: 100, fontFamily: 'Roboto' }}>Heart</span><span style={{ color: '#BF2520', fontWeight: 'bold' }}>City</span>
                </Typography>
                <StyledForm onSubmit={onSubmit} ref={formRef}>
                    <TextField
                        label="Name"
                        name="name"
                        variant="outlined"
                        required
                        error={nameError}
                        helperText={nameError ? "Name field cannot be blank." : ""}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        required
                        type="email"
                        error={emailError}
                        helperText={emailError ? "Email field cannot be blank." : ""}
                    />
                    <TextField
                        label="Message"
                        name="message"
                        variant="outlined"
                        multiline
                        required
                        rows={7}
                        error={messageError}
                        helperText={messageError ? "Message field cannot be blank." : ""}
                    />
                    <HCaptcha
                        theme={"dark"}
                        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                        onVerify={onHCaptchaChange}
                    />
                    {isLoading ? (
                        <CircularProgress />
                    ) : (
                        <>
                            {result && <ResultText submitted={isSubmitted ? "true" : undefined}>{result}</ResultText>}
                            {!isSubmitted && (
                                <SubmitButton
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Submit
                                </SubmitButton>
                            )}
                        </>
                    )}
                </StyledForm>
            </FormContainer>
        </div>
    );
}
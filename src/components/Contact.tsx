import { useState } from "react";
import "../assets/styles/Contact.scss";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { LoadingButton } from "@mui/lab";
import emailjs from "@emailjs/browser";
import FormHelperText from "@mui/material/FormHelperText";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface Props {
  mode: "light" | "dark";
}

function Contact({ mode }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusError, setStatusError] = useState("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "" || !EMAIL_REGEX.test(email));
    setMessageError(message === "");

    if (
      name !== "" &&
      email !== "" &&
      EMAIL_REGEX.test(email) &&
      message !== ""
    ) {
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      try {
        await emailjs.send("contact_service", "contact_form", templateParams, {
          publicKey: "NVLBm2RPjzUNI9xsb",
        });
        setName("");
        setMessage("");
        setEmail("");
        setStatusMessage(
          "Your message has been delivered. We will contact you shortly."
        );
      } catch (error) {
        setStatusError(
          "Your message couldn't be delivered at the momemt. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                className={mode === "dark" ? "text-field-dark" : ""}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                label="Email"
                placeholder="How can I reach you?"
                className={mode === "dark" ? "text-field-dark" : ""}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email" : ""}
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              className={`body-form
               ${mode === "dark" ? "text-field-dark" : ""}
              `}
              multiline
              rows={10}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            {statusMessage && (
              <FormHelperText
                sx={{
                  color: "green",
                  fontSize: "1rem",
                }}
              >
                {statusMessage}
              </FormHelperText>
            )}
            {statusError && (
              <FormHelperText
                error
                sx={{
                  fontSize: "1rem",
                }}
              >
                {statusError}
              </FormHelperText>
            )}
            <LoadingButton
              loading={loading}
              loadingPosition="center"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send
            </LoadingButton>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper'; 

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send('service_huf41zb', 'template_i3j7l3w', templateParams, 'iRF2Q7PHVyVgwK5Mv').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

return (
  <div id="contact">
    <div className="items-container">
      <div className="contact_wrapper">
        <h1>Contact Me</h1>
        <p>Have an exciting project or job opportunity in mind? Let’s team up and bring it to life!</p>

        <Paper
          elevation={3}
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            padding: 4,
            maxWidth: 600,
            margin: '0 auto',
          }}
        >
          <Box 
            component="form" 
            onSubmit={sendEmail}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              helperText={nameError ? "Name is required" : ""}
            />

            <TextField
              label="Email / Phone"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? "Email or phone is required" : ""}
            />

            <TextField
              label="Message / Inquiry"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Message cannot be empty" : ""}
            />

            <Button 
              type="submit"
              variant="contained" 
              endIcon={<SendIcon />}
              sx={{ mt: 2 }}
            >
              Send
            </Button>
          </Box>
        </Paper>
      </div>
    </div>
  </div>
);
};




export default Contact;
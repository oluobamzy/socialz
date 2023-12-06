import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


export default function Welcome({setIsWelcome}) {
  const handleClick = () => {
    setIsWelcome(false);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
        maxWidth="xl"
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1, opacity:0.2
          }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-yellow-flower-macro-close-up-1899-large.mp4" type="video/mp4" />
          {/* Add additional source elements for other video formats if needed */}
        </video>
        <Box sx={{ position: 'relative', zIndex: 1, color: 'common.white', height: '60%', display:"flex", flexDirection:"column"}}>
          <img src="https://media.istockphoto.com/id/1768244401/photo/mother-taking-her-daughter-to-school.jpg?s=612x612&w=0&k=20&c=ljJYP0cFUe6pbxIpSMe9HCMqcyEHeL990SfWWgnIspg=" alt="Logo" border="0" style={{width:"100%", height:"auto"}}/>
           <Button style={{color:"white", backgroundColor:"blue", width: "100%"}} onClick={handleClick}>
              Start Chatting
            </Button> 
         </Box>
        
        {/* Your content goes here */}
      </Container>
    </React.Fragment>
  );
}

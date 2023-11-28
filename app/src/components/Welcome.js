import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { borderRadius } from '@mui/system';

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
        <Box sx={{ position: 'relative', zIndex: 1, color: 'common.white', height: '80%', display:"flex", flexDirection:"column"}}>
           <img
             src="https://images.unsplash.com/photo-1509293010317-d1ef3416ed66?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="logo"
             style={{ height: '100%', width: 'auto', borderRadius:"10%", alignSelf:"center" }}
           />
           <Button style={{color:"white", backgroundColor:"blue", width: "100%"}} onClick={handleClick}>
              Call a Friend
            </Button> 
         </Box>
        
        {/* Your content goes here */}
      </Container>
    </React.Fragment>
  );
}

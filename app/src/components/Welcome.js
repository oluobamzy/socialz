import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Welcome() {
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
            zIndex: -1,
          }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-yellow-flower-macro-close-up-1899-large.mp4" type="video/mp4" />
          {/* Add additional source elements for other video formats if needed */}
        </video>
        
        {/* Your content goes here */}
      </Container>
    </React.Fragment>
  );
}

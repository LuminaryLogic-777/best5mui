import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Logo from "../assets/images/logo.png";
import IndiaLogo from "../assets/images/india_logo.png";
import cityBanner from "../assets/images/citybanner_1.webp";
import countryBanner from "../assets/images/World_map_blank_gmt.svg";
import { FitnessCenter } from '@mui/icons-material';
 

const BestCity = () => {
  const navigate = useNavigate();

  const handleCountryClick = () => {
    // Navigate to the next page with animation
    navigate('/top-cities');
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', padding: '16px' }}>
      {/* Header with Background Image */}
      <Box
        sx={{
          backgroundImage: `url(${cityBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '200px',
          backgroundPosition: 'Center',
          
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={Logo} alt="Best City Excellence" style={{ width: '150px', borderRadius: '50%' }} />
      </Box>

      {/* Heading Text */}
      <Typography variant="h6" sx={{ marginTop: '16px' }}>
        Find the Best Businesses, Services, Professionals, and Landmarks
      </Typography>

      {/* Map Selection */}
      <Typography variant="body1" sx={{ marginTop: '16px' }}>
        Choose a Map
      </Typography>
      
      {/* Scrollable Container */}
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          padding: '16px 0',
          backgroundImage: `url(${countryBanner})`,
          backgroundSize: 'cover',
        backgroundPosition: 'center',
         alignItems: 'center',
          gap: '16px',
             justifyContent:'center',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            height: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
          },
        }}
      >
        {/* India */}
        <Box
          sx={{
            flex: '0 0 auto',
            textAlign: 'center',
          }}
          onClick={handleCountryClick}
        >
          <CSSTransition
            in={true}
            timeout={300}
            classNames="fade"
            appear
          >
            <Paper
              sx={{
                width: 80,
                height: 80,
                backgroundImage: `url(${IndiaLogo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '50%',
                marginBottom: '8px',
                cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
              }}
            />
          </CSSTransition>
          <Typography variant="subtitle1">IN</Typography>
        </Box>

        {/* Coming Soon (US, GM, AUS) */}
        {['US', 'GM', 'AUS'].map((country, index) => (
          <Box
            key={index}
            sx={{
              flex: '0 0 auto',
              textAlign: 'center',
            }}
          >
            <Paper
              sx={{
                width: 80,
                height: 80,
                backgroundImage: `url(${IndiaLogo})`, // Replace with respective logos if available
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '50%',
                marginBottom: '8px',
                filter: 'grayscale(100%)',
                cursor: 'not-allowed', // Add not-allowed cursor to indicate it's not clickable
              }}
            />
            <Typography variant="subtitle1">{country}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default BestCity;

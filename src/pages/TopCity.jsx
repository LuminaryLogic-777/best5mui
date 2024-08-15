import React from 'react';
import { Box, Typography, Grid, TextField, IconButton, List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper, Slide } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Kolkata from '../assets/images/Kolkata-West-Bengal.jpg';
import Lucknow from '../assets/images/Lucknow-Uttar-Pradesh.jpg';
import Agra from '../assets/images/Agra-Uttar-Pradesh.jpg';
import Hyderabad from '../assets/images/Hyderabad-Telangana.jpg';

const TopCities = () => {
  const [transition, setTransition] = React.useState(true);

  const handleBackClick = () => {
    setTransition(false);
    setTimeout(() => {
      window.history.back(); // Navigate back to the previous page
    }, 300); // Duration of the slide transition
  };

  const cities = [
    { name: 'Kolkata', image: Kolkata },
    { name: 'Lucknow', image: Lucknow },
    { name: 'Agra', image: Agra },
    { name: 'Hyderabad', image: Hyderabad },
    { name: 'Kolkata', image: Kolkata },
    { name: 'Lucknow', image: Lucknow },
    { name: 'Agra', image: Agra },
    { name: 'Hyderabad', image: Hyderabad },
    { name: 'Hyderabad', image: Hyderabad },
  ];

  const cityList = [
    { name: 'Raipur', state: 'Chhattisgarh', image: Kolkata },
    { name: 'Hyderabad', state: 'Telangana', image: Kolkata },
    { name: 'Chandigarh', state: 'Chandigarh', image: Kolkata },
    { name: 'Jaipur', state: 'Rajasthan', image: Kolkata },
    { name: 'Raipur', state: 'Chhattisgarh', image: Kolkata },
    { name: 'Hyderabad', state: 'Telangana', image: Kolkata },
    { name: 'Chandigarh', state: 'Chandigarh', image: Kolkata },
    { name: 'Jaipur', state: 'Rajasthan', image: Kolkata },
  ];

  return (
    <Slide direction="left" in={transition} mountOnEnter unmountOnExit>
      <Box sx={{ padding: '16px' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBackClick}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Top Cities in India
          </Typography>
        </Box>

        {/* Top Cities */}
        <Grid container spacing={2} justifyContent="center">
          {cities.map((city, index) => (
            <Grid key={index} sx={{ textAlign: 'center' }}>
              <Avatar src={city.image} sx={{ width: 60, height: 60, margin: '16px' }} />
              <Typography variant="body2" sx={{ marginTop: '8px' }}>
                {city.name}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Search Bar */}
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search your city"
          sx={{ marginY: '20px',    backgroundColor: '#e7dccc' }}
        />

        {/* City List */}
        <List>
          {cityList.map((city, index) => (
            <ListItem key={index} component={Paper} sx={{ marginBottom: '8px' }}>
              <ListItemAvatar>
                <Avatar src={city.image} />
              </ListItemAvatar>
              <ListItemText primary={city.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Slide>
  );
};

export default TopCities;

import React from 'react';
import { Container, Box, Typography, Button, Grid, AppBar, Toolbar } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import appStoreImg from '../../assets/img/download-on-the-app-store.svg';
import googleStoreImg from '../../assets/img/GetItOnGooglePlay_Badge_Web_color_English.png';
import { PRIVACY_URL, TERMS_OF_USE_URL } from '../../App';

const SplashPage = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            {/* Navbar */}
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        HeartCity
                    </Typography>
                    <Button color="inherit">Sign In</Button>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    backgroundImage: 'url(https://source.unsplash.com/random)', // Replace with your background image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Your App, Your World
                </Typography>
                <Typography variant="h6" sx={{ mb: 4 }}>
                    Discover the easiest way to manage your daily tasks and life.
                </Typography>
                <Box>
                    {/* Apple Store Button */}
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={appStoreImg} // Replace with the correct path
                            alt="Download on the App Store"
                            style={{ height: 50, marginRight: 16 }}
                        />
                    </a>

                    {/* Android Button */}
                    <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={googleStoreImg} // Replace with the correct path
                            alt="Download on the Google Play Store"
                            style={{ height: 50, marginRight: 16 }}
                        />
                    </a>
                </Box>
            </Box>

            {/* Features Section */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                    Why You'll Love Our App
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <PhoneIphoneIcon fontSize="large" color="primary" />
                            <Typography variant="h6" sx={{ mt: 2 }}>
                                Simple & Intuitive
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                Our app is designed with simplicity in mind. Easy to navigate, use, and master.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <PhoneIphoneIcon fontSize="large" color="primary" />
                            <Typography variant="h6" sx={{ mt: 2 }}>
                                Fast & Reliable
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                Experience fast load times and reliable functionality every time you use it.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <PhoneIphoneIcon fontSize="large" color="primary" />
                            <Typography variant="h6" sx={{ mt: 2 }}>
                                Always Connected
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                Stay connected to your tasks wherever you go, anytime you need.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Footer */}
            <Box
                sx={{
                    py: 4,
                    backgroundColor: '#f5f5f5',
                    textAlign: 'center',
                }}
            >
                <Typography variant="body2" color="textSecondary">
                    © 2024 {currentYear}. All rights reserved. | <a href={PRIVACY_URL}>Privacy Policy</a> | <a href={TERMS_OF_USE_URL}>Terms of Service</a>
                </Typography>
            </Box>
        </div>
    );
};

export default SplashPage;

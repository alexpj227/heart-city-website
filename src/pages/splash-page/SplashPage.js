import React from 'react';
import { Container, Box, Typography, Button, Grid, AppBar, Toolbar } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import appStoreImg from '../../assets/img/download-on-the-app-store.svg';
import googleStoreImg from '../../assets/img/GetItOnGooglePlay_Badge_Web_color_English.png';
import { HOME_URL, PRIVACY_URL, TERMS_OF_USE_URL } from '../../App';
import styles from './SplashPage.module.css';
import heartCityHeartImg from '../../assets/img/heart-city-heart.png';
// import logo from '../../assets/logo.png';
import logo from '../../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../../assets/img/banner2.png';

const SplashPage = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    function handleHomeClick() {
        navigate(HOME_URL);
    }
    return (
        <div>
            {/* Navbar */}
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Typography onClick={handleHomeClick} variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer', marginTop: '10px' }}>
                        <img className={styles.heartLogo} src={logo} />
                        {/* <span className={styles.logo}>
                            Heart
                        </span>
                        <span className={styles.city}>
                            City
                        </span> */}
                        {/* Heart<span style={{fontFamily: 'Arial, sans-serif', fontSize: '32px', color: '#BF2522', fontWeight: 'bold'}}>City</span> */}
                    </Typography>
                    <Button sx={{marginTop: '-10px'}} color="inherit">Sign In</Button>
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
                    // width: '100vw',
                    backgroundImage: `url(${bannerImg})`, // Replace with your background image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '20px',
                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {/* Your App, Your World */}
                </Typography>
                <Typography variant="h6" sx={{ mb: 4 }}>
                    {/* Discover the easiest way to manage your daily tasks and life. */}
                </Typography>
                
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    pt: 5,
                }}
            >
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
            {/* Features Section */}
            <Container sx={{ pt: 7, pb: 8 }}>
    <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Why <span style={{fontWeight: 100, fontFamily: 'Roboto'}}>Heart</span><span style={{color: '#BF2520', fontWeight: 'bold'}}>City</span>?
    </Typography>
    <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
                <PhoneIphoneIcon fontSize="large" color="primary" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                    Simple & Intuitive
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    Our app makes finding volunteer opportunities in your community easy and stress-free. With a few taps, you can sign up for events that matter to you.
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
                    Get real-time updates on new volunteer events and sign up instantly. Our app ensures you never miss a chance to make a difference in your community.
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
                    Stay in touch with fellow volunteers and event organizers. Our app keeps you informed and engaged with your community every step of the way.
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

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import styles from './App.module.css';

function App() {
  const theme = createTheme();

  // heart city red color: #BF2520

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.container}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import styles from './App.module.css';
import Layout from './components/layout/Layout';
import { useState } from 'react';
import ScrollToTop from './components/scroll-to-top/ScrollTopTop';
import Blog from './pages/blog/Blog';
import Privacy from './pages/legal/privacy/Privacy';
import Terms from './pages/legal/terms/Terms';
import SplashPage from './pages/splash-page/SplashPage';


export const HOME_URL = '/';
export const BLOG_URL = '/blog';
export const PRIVACY_URL = '/legal/privacy';
export const TERMS_OF_USE_URL = '/legal/terms';
export const CONTACT_ID = 'contact';

function App() {
  const [selectedItem, setSelectedItem] = useState();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#BF2520"
      }
    }
  });

  // heartcity red color: #BF2520

  function handleScrollTo(id, behavior = 'smooth') {
    setSelectedItem(id);
    const section = document.getElementById(id);
    if (section) {
      const offset = -65;
      const y = section.getBoundingClientRect().top + window.scrollY + offset;
      // section.scrollIntoView({
      //   behavior: 'smooth'
      // });
      window.scrollTo({top: y, behavior});
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.container}>
          <BrowserRouter>
          <ScrollToTop />
          {/* <Layout selectedItem={selectedItem} handleScrollTo={handleScrollTo} /> */}
            <Routes>
              <Route path={BLOG_URL} element={<Blog />} />
              <Route path={HOME_URL} element={<SplashPage />} />
              <Route path={PRIVACY_URL} element={<Privacy />} />
              <Route path={TERMS_OF_USE_URL} element={<Terms />} />
              <Route path="*" element={<SplashPage />} />
            </Routes>
          </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

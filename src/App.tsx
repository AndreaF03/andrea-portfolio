import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { SEO } from './components/SEO';
import { Cursor } from './components/Cursor';
import { Loader } from './components/Loader';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

      <SEO />
      <GlobalStyle />
      <Loader />
      <Cursor />
      <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

export const lightTheme = {
  colors: {
    background: '#f8f8f8',
    text: '#333333',
    primary: '#0077b6',
    secondary: '#e9ecef',
  },
  fonts: {
    primary: "'Inter', sans-serif",
    mono: "'Fira Code', monospace",
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export const darkTheme = {
  colors: {
    background: '#0a192f',
    text: '#ccd6f6',
    primary: '#64ffda',
    secondary: '#112240',
  },
  fonts: {
    primary: "'Inter', sans-serif",
    mono: "'Fira Code', monospace",
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export type ThemeType = typeof lightTheme;

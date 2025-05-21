// src/components/ThemeToggle.tsx
import React from 'react';
import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
`;

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <ToggleButton 
  onClick={toggleDarkMode}
  aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {darkMode ? <FaSun /> : <FaMoon />}
</ToggleButton>

  );
};
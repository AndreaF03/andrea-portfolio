import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import styled from 'styled-components';
import { smoothScroll } from '../utils/smoothScroll';
import { ThemeToggle } from './ThemeToggle';


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: rgba(10, 25, 47, 0.9);
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.75rem;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.li`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 1000;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const MobileNavLink = styled.li`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 1.5rem;
  margin-bottom: 3rem;
`;
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (targetId: string) => {
    smoothScroll(targetId);
    setMobileMenuOpen(false);
  };
  

  return (
    <>
      <NavbarContainer style={{ backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.9)' : 'transparent' }}>
        <Logo>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {'Andrea Fernandes'}
          </motion.span>
        </Logo>
  
        <NavLinks>
          <NavLink onClick={() => handleNavClick('about')}>About</NavLink>
          <NavLink onClick={() => handleNavClick('projects')}>Projects</NavLink>
          <NavLink onClick={() => handleNavClick('contact')}>Contact</NavLink>
        </NavLinks>
  
        <SocialLinks>
          <SocialLink
            href="https://github.com/AndreaF03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/andrea-fernandes03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </SocialLink>
          <SocialLink
            href="mailto:andreadfse03@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineMail size={20} />
          </SocialLink>
        </SocialLinks>
  
        {/* Theme toggle button */}
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
  
        {/* Mobile menu toggle button */}
        <MobileMenuButton onClick={toggleMobileMenu}>
          <FaBars size={20} />
        </MobileMenuButton>
      </NavbarContainer>
  
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <CloseButton onClick={toggleMobileMenu}>
            <FaTimes size={20} />
          </CloseButton>
          <MobileNavLinks>
            <MobileNavLink onClick={() => handleNavClick('about')}>About</MobileNavLink>
            <MobileNavLink onClick={() => handleNavClick('projects')}>Projects</MobileNavLink>
            <MobileNavLink onClick={() => handleNavClick('contact')}>Contact</MobileNavLink>
          </MobileNavLinks>
          <SocialLinks>
            <SocialLink
              href="https://github.com/AndreaF03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/andrea-fernandes03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </SocialLink>
            <SocialLink
              href="mailto:andreadfse03@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail size={20} />
            </SocialLink>
          </SocialLinks>
        </MobileMenu>
      )}
    </>
  );
};  
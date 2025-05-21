import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const FooterContainer = styled.footer`
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const Credit = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  user-select: none;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink
          href="https://github.com/AndreaF03"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub size={20} />
        </SocialLink>
        <SocialLink
          href="https://linkedin.com/in/andrea-fernandes03"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={20} />
        </SocialLink>
        <SocialLink href="mailto:andreadfse03@gmail.com" aria-label="Send Email">
          <HiOutlineMail size={20} />
        </SocialLink>
      </SocialLinks>
      <Credit>Designed & Built by Andrea Romson Fernandes</Credit>
    </FooterContainer>
  );
};

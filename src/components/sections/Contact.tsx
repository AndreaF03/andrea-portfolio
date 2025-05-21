import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const ContactContainer = styled.section`
  min-height: 70vh;
  padding: 10rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  position: relative;

  &::before {
    content: '03.';
    position: absolute;
    left: -3rem;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.mono};
  }
`;

const Subtitle = styled.h3`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

const Description = styled.p`
  max-width: 600px;
  margin-bottom: 3rem;
`;

const Button = styled.a`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <ContactContainer id="contact" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <SectionHeading>What's Next?</SectionHeading>
        <Subtitle>Get In Touch</Subtitle>
        <Description>
          I'm always excited to connect with like-minded people! Whether you’re interested in collaborating, 
          discussing ideas, or just want to say hi—feel free to drop a message. I’ll do my best to respond promptly.
        </Description>
        <Button href="mailto:andreadfse03@gmail.com">Say Hello</Button>
      </motion.div>
    </ContactContainer>
  );
};

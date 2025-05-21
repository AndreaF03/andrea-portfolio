import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, stagger } from '../../utils/animations';


const HomeContainer = styled.section`
  min-height: 100vh;
  padding: 0 5rem;
  display: flex;
  align-items: center;
`;

const IntroText = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const NameHeading = styled.h1`
  font-size: 4.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
`;

const SubHeading = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
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

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

export const Home: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <HomeContainer id="home" ref={ref}>
      <motion.div
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={stagger}
      >
        <motion.div variants={fadeInUp}>
          <IntroText>Hi, my name is </IntroText>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <NameHeading>Andrea Romson Fernandes.</NameHeading>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <SubHeading>I build things for the web.</SubHeading>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Description>
            I am a motivated Computer Science student passionate about Data Science, with hands-on project experience in web development and analytics. Seeking a role where I can contribute to impactful real-world solutions using modern frontend and backend technologies.
          </Description>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Button href="#projects">Check out my work!</Button>
        </motion.div>
      </motion.div>
    </HomeContainer>
  );
};

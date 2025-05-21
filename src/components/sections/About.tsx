import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 10rem 5rem;
  display: flex;
  align-items: center;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 3rem;
  position: relative;

  &::before {
    content: '01.';
    position: absolute;
    left: -3rem;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.mono};
  }

  &::after {
    content: '';
    display: block;
    width: 300px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin-left: 20px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 5rem;
`;

const TextContent = styled.div`
  p {
    margin-bottom: 1.5rem;
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  max-width: 300px;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
  
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover::after {
    top: 15px;
    left: 15px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  transition: all 0.3s ease;

  &:hover {
    filter: none;
    mix-blend-mode: normal;
  }
`;

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    'ReactJS',
    'Node.js/Express',
    'Python, Java, C#',
    'HTML & CSS',
    'TypeScript',
    'SQL',
    'Git/GitHub',
    'Flask & OpenCV',
    'Bootstrap'
  ];

  return (
    <AboutContainer id="about" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <SectionHeading> About Me</SectionHeading>
        <Content>
          <TextContent>
            <p>
              Hello! I'm <strong>Andrea Romson Fernandes</strong>, a passionate Computer Science and Engineering student from 
              <strong> St. Joseph Engineering College, Mangaluru</strong> (2022–2026). With a CGPA of <strong>9.05</strong>, 
              I enjoy solving real-world problems using technology, particularly in <strong>Full Stack Development</strong> 
              and <strong>Data Science</strong>.
            </p>
            <p>
              I've worked on diverse projects like an <strong>Expense Tracker</strong> using C# and Visual Studio, 
              and <strong>Marker-Controlled Watershed Segmentation</strong> using Python, OpenCV, and NumPy. 
              I’m also exploring the potential of <strong>AI chatbots</strong>, <strong>Smart Workspace Optimization</strong>, and 
              <strong>Web3</strong> applications.
            </p>
            <p>
              I enjoy crafting clean, responsive user interfaces with ReactJS and building robust backends using Node.js, Flask, and .NET. 
              I’m also skilled in working with databases, cloud tools, and DevOps practices.
            </p>
            <p>
              Currently, I’m expanding my skills in cloud computing, real-time computer vision, and decentralized systems. 
              I’m eager to take on new challenges, collaborate with teams, and create meaningful digital solutions.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <SkillsList>
              {skills.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillsList>
            <p style={{ marginTop: '2rem' }}>
               Connect with me on <a href="https://www.linkedin.com/in/andrea-fernandes03" target="_blank" rel="noopener noreferrer">LinkedIn</a> or check out my work on <a href="https://github.com/AndreaF03" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
          </TextContent>
          <ImageContainer>
            <ImageWrapper>
              <Image src="/profile.jpg" alt="Andrea Romson Fernandes" />
            </ImageWrapper>
          </ImageContainer>
        </Content>
      </motion.div>
    </AboutContainer>
  );
};

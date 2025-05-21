import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { stagger, fadeInUp } from '../../utils/animations';

const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding: 10rem 5rem;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 3rem;
  position: relative;

  &::before {
    content: '02.';
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

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const FolderIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
`;

const ProjectTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ProjectTechItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
`;

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubLink: string;
  liveLink?: string;
}

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      title: 'Smart Waste Segregator',
      description:
        'Image classification system for waste segregation using watershed segmentation. Classifies waste into cardboard, glass, metal, paper, plastic, and trash. Features include feature extraction with color histograms, texture patterns, HOG, and a web interface for image upload/testing.',
      tech: ['Python', 'Flask', 'OpenCV', 'RandomForest'],
      githubLink: 'https://github.com/AndreaF03/Smart-waste-segregator.git',
    },
    {
      title: 'Expense Tracker',
      description:
        'An expense tracker app using C# and SQL for managing daily expenses efficiently.',
      tech: ['C#', 'SQL'],
      githubLink: 'https://github.com/AndreaF03/CPDN.git',
    },
    {
      title: 'Homophonic Cipher',
      description:
        'A web application implementing homophonic cipher encryption and decryption, built with Flask backend and React frontend.',
      tech: ['Python', 'Flask', 'React', 'Bootstrap'],
      githubLink: 'https://github.com/AndreaF03/HomophonicCipher.git',
    },
    {
      title: 'Image Segmentation',
      description:
        'Project involving image segmentation techniques using Python, OpenCV, and NumPy.',
      tech: ['Python', 'OpenCV', 'NumPy'],
      githubLink: 'https://github.com/AndreaF03/ImageSegmentation.git',
    },
  ];

  return (
    <ProjectsContainer id="projects" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={stagger}
        transition={{ staggerChildren: 0.1 }}
      >
        <SectionHeading>Some Things I've Built</SectionHeading>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} variants={fadeInUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <ProjectHeader>
                <FolderIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </FolderIcon>
                <ProjectLinks>
                  {project.githubLink && (
                    <ProjectLink
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository of ${project.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </ProjectLink>
                  )}
                  {project.liveLink && (
                    <ProjectLink
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTechList>
                {project.tech.map((tech, i) => (
                  <ProjectTechItem key={i}>{tech}</ProjectTechItem>
                ))}
              </ProjectTechList>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </motion.div>
    </ProjectsContainer>
  );
};

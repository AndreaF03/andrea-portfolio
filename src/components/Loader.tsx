import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  letter-spacing: 1px;
`;

const ProgressBar = styled.div`
  width: 220px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
  border-radius: 2px;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <LoaderContainer
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Logo>{'Andrea Fernandes'}</Logo> 
          <ProgressBar>
            <Progress
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.4, ease: 'easeInOut' }}
            />
          </ProgressBar>
        </LoaderContainer>
      )}
    </AnimatePresence>
  );
};

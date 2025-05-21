import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const CursorDot = styled.div<{ clicked: boolean; hovered: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: background-color 0.2s ease, transform 0.15s ease;

  ${({ clicked }) =>
    clicked &&
    css`
      transform: translate(-50%, -50%) scale(0.75);
      background-color: ${({ theme }) => theme.colors.secondary};
    `}

  ${({ hovered }) =>
    hovered &&
    css`
      transform: translate(-50%, -50%) scale(1.3);
      background-color: ${({ theme }) => theme.colors.secondary};
    `}
`;

const CursorOutline = styled.div<{ clicked: boolean; hovered: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: transform 0.25s ease, opacity 0.25s ease;

  ${({ clicked }) =>
    clicked &&
    css`
      transform: translate(-50%, -50%) scale(0.85);
      opacity: 0.7;
    `}

  ${({ hovered }) =>
    hovered &&
    css`
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0.5;
    `}
`;

export const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const linkElements = document.querySelectorAll('a, button');
    linkElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);

      linkElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <CursorDot
        clicked={clicked}
        hovered={hovered}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <CursorOutline
        clicked={clicked}
        hovered={hovered}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

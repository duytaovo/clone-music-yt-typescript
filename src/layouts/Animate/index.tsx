// src/components/AnimatedTransition.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-50px);
  }
`;

const TransitionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  animation-duration: 500ms;
  animation-fill-mode: both;

  &.fade-appear,
  &.fade-enter {
    animation-name: ${fadeIn};
  }

  &.fade-exit {
    animation-name: ${fadeOut};
  }
`;

interface AnimatedTransitionProps {
  children: React.ReactNode;
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({ children }) => {
  return <TransitionContainer>{children}</TransitionContainer>;
};

export default AnimatedTransition;

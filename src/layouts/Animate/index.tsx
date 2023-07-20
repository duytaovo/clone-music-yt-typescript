// src/components/AnimatedTransition.tsx
import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import './styles.css'

interface AnimatedTransitionProps {
  children: React.ReactNode
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({ children }) => {
  const nodeRef = useRef(null)
  return (
    <CSSTransition
    nodeRef={nodeRef}
    in={true}
    appear={true}
    timeout={300}
    classNames="fade"
    
  >
    <div ref={nodeRef}>{children}</div>
  </CSSTransition>
  )
}

export default AnimatedTransition

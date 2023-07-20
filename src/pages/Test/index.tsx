import React, { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import './styles.css'

export default function Test() {
  const [showButton, setShowButton] = useState(true)
  const [showMessage, setShowMessage] = useState(false)
  const nodeRef = useRef(null)
  return (
    <div>
      {showButton && (
        <button onClick={() => setShowMessage(true)} className="text-white">
          Show Message
        </button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames='wipe'
        unmountOnExit
        appear={true}
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <p className='text-white'>abc</p>
      </CSSTransition>
    </div>
  )
}

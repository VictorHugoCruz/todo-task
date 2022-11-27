import React from 'react'
import ReactDOM from 'react-dom'
import '../css/Modal.css'

function Modal(props) {
  return ReactDOM.createPortal(
    <div className="modal-container">
      {props.children}
    </div>,
    document.getElementById('modal')
  )
}

export { Modal };
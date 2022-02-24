import { motion } from 'framer-motion';
import { Backdrop } from './Backdrop';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const ModalComponent = ({ handleClose, children }) => {
  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };

  return (
    <Backdrop handleClose={handleClose}>
      <motion.div
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='items-center'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </Backdrop>
  );
};

export const Modal = ({ modalIsOpen, handleClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  console.log('Triggering modal');

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = modalIsOpen && (
    <ModalComponent handleClose={handleClose}>{children}</ModalComponent>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;

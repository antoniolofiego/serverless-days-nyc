import { motion } from 'framer-motion';

export const Backdrop = ({ handleClose, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full overflow-hidden dark:bg-gray-900/75 bg-gray-50/75'
      onClick={handleClose}
    >
      <motion.button
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
        className='fixed top-0 right-0 z-50 p-8 text-4xl'
        onClick={handleClose}
      >
        x
      </motion.button>
      {children}
    </motion.div>
  );
};

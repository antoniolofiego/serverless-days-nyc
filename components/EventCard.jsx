import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal, EventModal } from '../components';

export const EventCard = ({ talkName, speakerName, time, id }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const open = () => {
    setModalIsOpen(true);
  };

  const close = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.99, transition: { duration: 0.2 } }}
        onClick={() => open()}
        className='flex items-center max-w-full py-4 transition-all border border-gray-900 divide-x-2 rounded-lg lg:max-w-md grow lg:grow-0 bg-gradient-to-tl from-gray-200 to-blue-50 dark:bg-gradient-to-tl dark:from-gray-900 dark:to-blue-900 dark:active:bg-gradient-to-tl dark:active:from-gray-900 dark:active:to-blue-800 min-h-[10rem] dark:border-gray-50'
      >
        <div className='flex justify-center w-1/4'>
          <p className='whitespace-nowrap'>{time}</p>
        </div>
        <div className='flex flex-col items-start justify-around w-3/4 h-full col-span-6 px-8 space-y-2'>
          <h3 className='text-xl text-left font-title'>{talkName}</h3>
          <p className='font-black leading-relaxed'>{speakerName}</p>
        </div>
      </motion.button>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalIsOpen && (
          <Modal modalIsOpen={modalIsOpen} handleClose={close}>
            <EventModal startingTalk={id} handleClose={close} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

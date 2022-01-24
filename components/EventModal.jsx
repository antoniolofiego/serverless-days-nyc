import { forwardRef, useEffect, useRef } from 'react';
import { EventModalCard } from './EventModalCard';
import { motion, AnimatePresence } from 'framer-motion';
import { talks } from '../data/talks';

const ModalCardWrapper = forwardRef((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});

ModalCardWrapper.displayName = 'ModalCardWrapper';

export const EventModal = ({ startingTalk }) => {
  const modalsRef = useRef(Array(talks));

  console.log(startingTalk);

  console.log(modalsRef.current[startingTalk]);

  useEffect(() => {
    modalsRef.current[startingTalk].scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center',
    });
  }, [startingTalk]);

  console.log(modalsRef);

  return (
    <div className='flex items-center overflow-hidden snap-x snap-mandatory'>
      <EventModalCard empty />
      <EventModalCard empty />
      {talks.map((talk, i) => {
        return (
          <AnimatePresence
            key={i}
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              ref={(el) => (modalsRef.current[i] = el)}
              onClick={() =>
                modalsRef.current[i].scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                  inline: 'center',
                })
              }
              className='max-w-xs p-12 mx-12 my-12 overflow-hidden border border-gray-900 rounded-lg shadom-md snap-center sm:max-w-md md:max-w-lg lg:max-w-2xl shrink-0 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-blue-900 dark:border-gray-50'
            >
              <EventModalCard
                startingTalk={startingTalk}
                talkName={talk.talkName}
                description={talk.description}
                speakerName={talk.speakerName}
              />
            </motion.div>
          </AnimatePresence>
        );
      })}
      <EventModalCard empty />
      <EventModalCard empty />
    </div>
  );
};

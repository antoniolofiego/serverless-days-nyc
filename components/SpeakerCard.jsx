import Image from 'next/image';
import { motion } from 'framer-motion';

export const SpeakerCard = ({ pronouns = 'he/him' }) => {
  return (
    <motion.div className='flex items-center justify-center space-x-6 space-y-2 md:flex-col md:space-x-0'>
      <motion.div
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.2 },
        }}
        className='flex items-center justify-center group'
      >
        <div className='absolute rounded-full w-[12.25rem] h-[12.5rem] bg-gradient-to-r from-blue-900 to-blue-300 group-hover:animate-spin transition-all' />
        <div className='relative w-48 h-48 rounded-full aspect-square '>
          <Image
            className='object-cover object-center w-full h-full rounded-full'
            layout='fill'
            src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
            alt='photo'
          />
        </div>
      </motion.div>

      <div className='flex flex-col items-start justify-center space-y-2 md:items-center'>
        <span className='text-lg font-bold text-blue-900 dark:text-gray-200'>
          Dany Bailey ({pronouns})
        </span>
        <span className='text-base font-normal text-gray-700 dark:text-blue-50'>
          Software Engineer @ Company
        </span>
      </div>
    </motion.div>
  );
};

import Image from 'next/image';
import { motion } from 'framer-motion';

export const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, translateX: -60 },
    visible: (custom) => ({
      opacity: 1,
      translateX: 0,
      duration: 1,
      transition: { delay: custom },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      translateX: 0,
      duration: 1,
      transition: { delay: 0.5 },
    },
  };

  return (
    <div className='relative h-[24rem]'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='absolute w-full xl:right-0 xl:w-1/2 h-[24rem] blur-[1px] xl:blur-none'
      >
        <Image
          src='https://images.unsplash.com/photo-1544111795-fe8b9def73f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=977&q=30'
          alt='Picture of NYC Times Square'
          layout='fill'
          className='object-cover xl:[clip-path:polygon(25%_0%,_100%_0%,_100%_100%,_0%_100%)] '
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='absolute [top:calc(50%_+_20px)] [right:calc(8%)] hidden md:block z-20'
      >
        <Image
          src='/images/unicorn_mascot.svg'
          alt='ServerlessDays Mascot'
          height='300'
          width='200'
          className='object-cover'
        />
      </motion.div>
      <div className='z-20 flex items-center h-full p-8 mx-auto max-w-7xl'>
        <div className='z-20 space-y-6'>
          <div>
            <motion.div
              variants={textVariants}
              initial='hidden'
              animate='visible'
              custom={0.1}
              className='hidden xl:block dark:xl:hidden'
            >
              <Image
                src='/images/logo_lightmode.png'
                height='66'
                width='715'
                alt='ServerlessDays NYC Logo'
              />
            </motion.div>
            <motion.div
              variants={textVariants}
              initial='hidden'
              animate='visible'
              custom={0.1}
              className='block xl:hidden dark:xl:block'
            >
              <Image
                src='/images/logo_darkmode.png'
                height='66'
                width='715'
                alt='ServerlessDays NYC Logo'
              />
            </motion.div>
          </div>
          <div className='flex flex-col items-center justify-center w-full space-y-4 md:block'>
            <motion.h1
              variants={textVariants}
              initial='hidden'
              animate='visible'
              custom={0.3}
              className='text-2xl font-extrabold [text-shadow:_#000_1px_0_10px] xl:[text-shadow:_none] md:text-4xl font-title text-gray-50 xl:text-gray-900 dark:xl:text-gray-50'
            >
              One Day, One Track, One Community.
            </motion.h1>
            <motion.h2
              variants={textVariants}
              initial='hidden'
              animate='visible'
              custom={0.4}
              className='text-xl font-extrabold [text-shadow:_#000_1px_0_10px] xl:[text-shadow:_none] md:text-2xl font-title text-gray-50 xl:text-gray-900 dark:xl:text-gray-50'
            >
              May 20, 2022 @ Microsoft Reactor
            </motion.h2>
            <motion.button
              variants={buttonVariants}
              initial='hidden'
              animate='visible'
              whileTap={{ scale: 0.95 }}
              className='px-8 py-3 transition bg-gray-800 rounded-full text-gray-50 dark:text-gray-800 dark:bg-gray-100 hover:bg-gray-400 dark:hover:bg-gray-200 font-title'
            >
              Reserve your spot
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

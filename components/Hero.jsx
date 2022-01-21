import Image from 'next/image';

export const Hero = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full xl:right-0 xl:w-1/2 h-[24rem] blur-sm xl:blur-none'>
        <Image
          src='/images/nyc.jpg'
          alt='Picture of NYC Times Square'
          layout='fill'
          className='object-cover xl:[clip-path:polygon(25%_0%,_100%_0%,_100%_100%,_0%_100%)] '
        />
      </div>
      <div className='absolute [top:calc(50%_+_20px)] [right:30px] hidden md:block z-20'>
        <Image
          src='/images/unicorn_mascot.svg'
          alt='ServerlessDays Mascot'
          height='300'
          width='200'
          className='object-cover'
        />
      </div>
      <div className='z-50 flex p-8 mx-auto max-w-7xl'>
        <div className='z-50 space-y-6'>
          <>
            <div className='hidden xl:block dark:xl:hidden'>
              <Image
                src='/images/logo_lightmode.png'
                height='66'
                width='715'
                alt='ServerlessDays NYC Logo'
              />
            </div>
            <div className='block xl:hidden dark:xl:block'>
              <Image
                src='/images/logo_darkmode.png'
                height='66'
                width='715'
                alt='ServerlessDays NYC Logo'
              />
            </div>
          </>
          <div className='space-y-4'>
            <h1 className='text-2xl font-extrabold md:text-4xl font-title text-gray-50 xl:text-gray-900 dark:xl:text-gray-50'>
              One Day, One Track, One Community.
            </h1>
            <h2 className='text-xl font-extrabold md:text-2xl font-title text-gray-50 xl:text-gray-900 dark:xl:text-gray-50'>
              May 20, 2022 @ Microsoft Reactor
            </h2>
          </div>
          <button className='px-8 py-3 transition bg-gray-800 rounded-full text-gray-50 dark:text-gray-800 dark:bg-gray-100 hover:bg-gray-400 dark:hover:bg-gray-200 font-title'>
            Reserve your spot
          </button>
        </div>
      </div>
    </div>
  );
};

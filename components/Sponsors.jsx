import { useState, useEffect } from 'react';
import { Heading, AnimatingDiv } from '../components';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export const Sponsors = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatingDiv
      id='sponsors'
      className='flex flex-col max-w-xs mx-auto space-y-8 md:space-y-12 sm:max-w-md lg:max-w-4xl md:max-w-2xl scroll-mt-28'
    >
      <Heading title='Sponsors' />
      <div className='space-y-32'>
        {/* Headline sponsor */}
        <div className='flex flex-col items-center space-y-8'>
          <h3 className='text-2xl tracking-wide font-title'>
            Headline Sponsor
          </h3>
          <a
            href='https://www.theodo.com/'
            target='_blank'
            className='block w-full h-full'
            rel='noreferrer'
          >
            <div className='relative flex items-center w-full h-36'>
              <Image
                className='h-36'
                src={`/logos/${resolvedTheme}-theodo.svg`}
                alt='Theodo logo'
                layout='fill'
              />
            </div>
          </a>
        </div>
        {/* Location sponsor */}
        <div className='flex flex-col items-center space-y-8'>
          <h3 className='text-2xl tracking-wide font-title'>Venue Sponsor</h3>
          <a
            href='https://developer.microsoft.com/en-us/reactor/'
            target='_blank'
            className='block w-full h-full'
            rel='noreferrer'
          >
            <div className='relative flex items-center w-full h-48'>
              <Image
                className='h-48'
                src={`/logos/${resolvedTheme}-reactor.svg`}
                alt='Microsoft Reactor logo'
                layout='fill'
              />
            </div>
          </a>
        </div>
        {/* Gold */}
        <div className='space-y-16 md:space-y-8'>
          <h3 className='text-2xl tracking-wide text-center font-title'>
            Gold Sponsors
          </h3>
          <div className='grid grid-cols-1 gap-x-24 md:grid-cols-3 gap-y-24 md:gap-y-0'>
            <a
              href='https://aws.amazon.com/'
              target='_blank'
              className='block w-full h-full'
              rel='noreferrer'
            >
              <div className='flex items-center h-24 md:h-64'>
                <div className='relative w-full h-24 md:h-48'>
                  <Image
                    className='h-24 md:h-48'
                    src={`/logos/${resolvedTheme}-aws.svg`}
                    alt='AWS logo'
                    layout='fill'
                  />
                </div>
              </div>
            </a>
            <a
              href='https://www.jit.io/'
              target='_blank'
              className='block w-full h-full'
              rel='noreferrer'
            >
              <div className='flex items-center h-24 md:h-64'>
                <div className='relative w-full h-24 md:h-48'>
                  <Image
                    className='h-24 md:h-48'
                    src={`/logos/jit.svg`}
                    alt='Jit.io logo'
                    layout='fill'
                  />
                </div>
              </div>
            </a>
            <a
              href='https://www.vendia.net/'
              target='_blank'
              className='block w-full h-full'
              rel='noreferrer'
            >
              <div className='flex items-center h-24 md:h-64'>
                <div className='relative w-full h-52 md:h-48'>
                  <Image
                    className='h-52 md:h-48 fill-gray-900 dark:fill-gray-50'
                    src={`/logos/vendia.svg`}
                    alt='Vendia logo'
                    layout='fill'
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
        {/*Silver */}
        <div className='space-y-8'>
          <h3 className='text-2xl tracking-wide text-center font-title'>
            Silver Sponsors
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8'>
            <a
              href='https://www.contrastsecurity.com/'
              target='_blank'
              className='block w-full h-full'
              rel='noreferrer'
            >
              <div className='flex items-center h-24 md:h-64'>
                <div className='relative w-full h-16'>
                  <Image
                    className='h-16'
                    src={`/logos/light-contrast.svg`}
                    alt='Contrast Security logo'
                    layout='fill'
                  />
                </div>
              </div>
            </a>
            <a
              href='https://www.serverlessguru.com/'
              target='_blank'
              className='block w-full h-full'
              rel='noreferrer'
            >
              <div className='flex items-center h-24 md:h-64'>
                <div className='relative w-full h-24'>
                  <Image
                    className='h-24'
                    src={`/logos/serverless-guru.svg`}
                    alt='Serverless Guru logo'
                    layout='fill'
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </AnimatingDiv>
  );
};

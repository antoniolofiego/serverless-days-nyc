import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ThemeSwitcherButton } from '../components';

export const Navbar = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 80) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  useEffect(() => {
    if (!router.asPath.includes('#')) {
      window.scrollTo(0, 0);
    }
  }, [router]);

  const menuItems = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/#about' },
    { title: 'Dates', url: '/#dates' },
    { title: 'Location', url: '/#location' },
    { title: 'Agenda', url: '/#agenda' },
    { title: 'Sponsors', url: '/#sponsors' },
    { title: 'CoC', url: '/coc' },
  ];

  return (
    <>
      <header
        className={`w-full transition ease-in-out duration-500 z-50 sticky top-0 ${
          animateHeader &&
          'shadow-xl dark:bg-blue-900/50 backdrop-filter backdrop-blur-lg hidden md:block'
        }`}
      >
        <div className='mx-auto max-w-7xl '>
          <div
            className={`md:flex max-w-screen-xl py-10 hidden sticky ${
              animateHeader && 'py-5'
            } mx-auto items-center justify-between px-8 trasition ease-in-out duration-500`}
          >
            <nav>
              <ul className='flex items-center justify-start'>
                {menuItems?.map((item) => (
                  <li key={item?.title}>
                    <Link href={item?.url}>
                      <a className='px-2 lg:px-6 py-6 text-md border-b-2 border-transparent hover:border-gray-400 leading-[22px] md:px-3 text-gray-900 dark:text-gray-50 hover:text-gray-400 font-title transition'>
                        {item?.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className='flex items-center space-x-8'>
              <ThemeSwitcherButton height='h-8' />
              <a
                href='https://ti.to/serverlessdays-nyc/serverlessdays-nyc-2022'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-3 transition bg-gray-800 rounded-full text-gray-50 dark:text-gray-800 dark:bg-gray-100 hover:bg-gray-400 dark:hover:bg-gray-200 font-title'>
                  Tickets
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <header className='fixed z-50 w-12 bottom-4 right-4 md:hidden'>
        <ThemeSwitcherButton height='h-12' />
      </header>
    </>
  );
};

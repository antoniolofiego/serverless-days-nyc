import { useState, useEffect } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  const menuItems = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Location', url: '/location' },
    { title: 'Speakers', url: '/speakers' },
    { title: 'Schedule', url: '/schedule' },
    { title: 'Sponsors', url: '/sponsors' },
  ];

  return (
    <header
      className={`w-full backdrop-filter backdrop-blur-lg bg-gradient-to-br from-blue-50 to-transparent fixed z-10 trasition ease-in-out duration-500 ${
        animateHeader && 'shadow-xl'
      }`}
    >
      <div className='max-w-7xl mx-auto '>
        <div
          className={`flex max-w-screen-xl py-10 ${
            animateHeader && 'py-5'
          } mx-auto items-center justify-between px-8 trasition ease-in-out duration-500`}
        >
          <nav>
            <ul className='flex items-center justify-start'>
              {menuItems?.map((item) => (
                <li key={item?.title}>
                  <Link href={item?.url}>
                    <a className='px-2 lg:px-6 py-6 text-md border-b-2 border-transparent hover:border-gray-400 leading-[22px] md:px-3 text-gray-900 hover:text-gray-400 font-title transition'>
                      {item?.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button className='px-8 py-3 rounded-full bg-gray-800 hover:bg-gray-400 transition text-white font-title'>
            Tickets
          </button>
        </div>
      </div>
    </header>
  );
};

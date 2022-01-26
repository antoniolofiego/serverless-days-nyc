import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const menuItems = [
    { title: 'Dates', url: '/#dates' },
    { title: 'Location', url: '/#location' },
    { title: 'Speakers', url: '/#speakers' },
    { title: 'Agenda', url: '/#agenda' },
    { title: 'Sponsors', url: '/#sponsors' },
    { title: 'CoC', url: '/#coc' },
    { title: 'Back to top', url: '/' },
  ];

  return (
    <div className='py-8 dark:bg-gray-900' id='footer'>
      <div>
        <div className='flex items-center justify-between h-full max-w-5xl py-4 mx-auto'>
          <div className='space-y-4'>
            <div>
              <div className='hidden xl:block dark:xl:hidden'>
                <Image
                  src='/images/logo_lightmode.png'
                  height='30'
                  width='325'
                  alt='ServerlessDays NYC Logo'
                />
              </div>
              <div className='block xl:hidden dark:xl:block'>
                <Image
                  src='/images/logo_darkmode.png'
                  height='30'
                  width='325'
                  alt='ServerlessDays NYC Logo'
                />
              </div>
            </div>

            <div className='space-y-1 font-title'>
              <p>May 20, 2022</p>
              <p>Microsoft Reactor</p>
              <p>335 Madison Ave</p>
              <p>New York, NY 10017</p>
            </div>
          </div>
          <nav>
            <ul className='flex flex-col items-end justify-end'>
              {menuItems?.map((item) => (
                <li key={item?.title}>
                  <Link href={item?.url}>
                    <a className='text-md border-b-2 border-transparent hover:border-gray-400 leading-[22px] text-gray-900 dark:text-gray-50 hover:text-gray-400 font-title transition'>
                      {item?.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className='py-4 text-center'>
          &copy; {new Date(Date.now()).getFullYear()} | ServerlessDays NYC, LLC.
        </p>
      </div>
    </div>
  );
};

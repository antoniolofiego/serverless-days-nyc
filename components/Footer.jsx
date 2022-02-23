import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const menuItems = [
    { title: 'About', url: '/#about' },
    { title: 'Dates', url: '/#dates' },
    { title: 'Location', url: '/#location' },
    // { title: 'Speakers', url: '/#speakers' },
    // { title: 'Agenda', url: '/#agenda' },
    { title: 'Sponsors', url: '/#sponsors' },
    { title: 'CoC', url: '/#coc' },
    { title: 'Back to top', url: '/' },
  ];

  return (
    <div className='py-8 bg-gray-50 dark:bg-gray-900' id='footer'>
      <div>
        <div className='flex flex-col items-center justify-between h-full py-4 mx-auto md:max-w-2xl lg:max-w-4xl md:flex-row'>
          <div className='space-y-4'>
            <div>
              <div className='block dark:hidden'>
                <Image
                  src='/images/logo_lightmode.png'
                  height='30'
                  width='325'
                  alt='ServerlessDays NYC Logo'
                />
              </div>
              <div className='hidden dark:block'>
                <Image
                  src='/images/logo_darkmode.png'
                  height='30'
                  width='325'
                  alt='ServerlessDays NYC Logo'
                />
              </div>
            </div>

            <div className='space-y-1 text-center font-title md:text-left'>
              <p>June 24, 2022</p>
              <p>Microsoft Reactor</p>
              <p>11 Times Square</p>
              <p>New York, NY 10036</p>
            </div>
          </div>
          <nav>
            <ul className='flex-col items-end justify-end hidden md:flex'>
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

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Speakers, Logo } from '../components';

export default function Home() {
  // TODO: replace mock theme with next-themes provided one
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* TODO: Move hero section to its own component */}
      <div className='flex justify-center py-32 mx-auto'>
        <Logo mode={theme} />
      </div>
      <button onClick={() => setTheme('light')}>Set light</button>
      <button onClick={() => setTheme('dark')}>Set dark</button>
      <div className='max-w-6xl mx-auto'>
        <div>
          <Speakers />
        </div>
      </div>
    </div>
  );
}

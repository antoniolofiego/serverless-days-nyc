import Head from 'next/head';
import Image from 'next/image';
import { Speakers } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='to-transparent'>
        <div className='h-32 relative my-32'>
          <Image
            src='/images/logo.png'
            layout='fill'
            objectFit='contain'
            alt='ServerlessDays NYC Logo'
          />
        </div>
      </div>
      <div className='max-w-6xl mx-auto'>
        <div>
          <Speakers />
        </div>
      </div>
    </div>
  );
}

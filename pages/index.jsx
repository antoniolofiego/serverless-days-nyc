import Head from 'next/head';
import { Speakers, Hero, Timeline } from '../components';

export default function Home() {
  return (
    <div className='space-y-32'>
      <Head>
        <title>ServerlessDays NYC</title>
        <meta
          name='description'
          content='A single day conference on Serverless technologies in the hearth of Manhattan'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <div className='max-w-6xl mx-auto space-y-12'>
        <Timeline />
        <Speakers />
      </div>
    </div>
  );
}

import Head from 'next/head';
import { Speakers, Hero, Timeline, Agenda } from '../components';

export default function Home() {
  return (
    <div className='space-y-32'>
      <Head>
        <title>ServerlessDays NYC</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='A single day conference on Serverless technologies in the heart of Manhattan'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <div className='max-w-6xl mx-auto space-y-12'>
        <Timeline />
        <Speakers />
        <Agenda />
      </div>
    </div>
  );
}

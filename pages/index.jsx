import { NextSeo } from 'next-seo';
import Head from 'next/head';
import {
  About,
  Speakers,
  Hero,
  Timeline,
  Agenda,
  Location,
  Sponsors,
} from '../components';

export default function Home() {
  return (
    <div className='space-y-32'>
      <NextSeo
        title='ServerlessDays NYC'
        description='A single day conference on Serverless technologies in the heart of Manhattan'
        openGraph={{
          type: 'website',
          url: 'https://nyc.serverlessdays.io',
          title: 'ServerlessDays NYC',
          description:
            "This year's conference is for builders in small teams who want to get their applications in front of users as quickly as possible. The keynote, sessions, and optional workshops all focus on how you can deliver value without large investments in time and training. It's serverless that works for you!",
          images: [
            {
              url: 'https://nyc.serverlessdays.io/images/og.png',
              width: 1500,
              height: 785,
              alt: 'ServerlessDays NYC',
            },
          ],
        }}
      />

      <Hero />
      <div className='max-w-5xl pb-16 mx-auto space-y-16'>
        <About />
        <Timeline />
        <Agenda />
        <Location />
        <Sponsors />
      </div>
    </div>
  );
}

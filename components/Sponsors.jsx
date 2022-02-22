import { Heading } from './Heading';
import { AnimatingDiv } from './AnimatingDiv';

export const Sponsors = () => {
  return (
    <AnimatingDiv
      id='sponsors'
      className='flex flex-col max-w-xs mx-auto space-y-6 sm:max-w-md lg:max-w-4xl md:max-w-2xl'
    >
      <Heading title='Sponsors' />
      <h2 className='text-2xl font-bold text-center font-title'>
        Become a sponsor!
      </h2>
      <p>
        ServerlessDays is a community-focused, single-track, one-day event that
        moves away from the hype and focuses on the reality serverless-based
        solutions. It&apos;s about fostering a community locally and helping all
        of us learn from each other as we embrace a new way of building
        applications.
      </p>
      <p>
        As a community event, ServerlessDays could not exist without sponsors.
        We are currently offering sponsorship packages for the NYC
        ServerlessDays event. Together we can create a unique and meaningful
        experience for our attendees.
      </p>
      <p>
        We&apos;d love to have you as a sponsor! To become a sponsor or learn
        more, please contact{' '}
        <a
          className='font-extrabold font-title'
          href='mailto:nyc@serverlessdays.io'
        >
          nyc@serverlessdays.io
        </a>
      </p>
    </AnimatingDiv>
  );
};

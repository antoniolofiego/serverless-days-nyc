import { Heading } from './Heading';
import { EventCard } from './EventCard';

export const Agenda = () => {
  return (
    <div
      className='flex flex-col justify-center max-w-md mx-auto scroll-mt-28 sm:max-w-xl lg:max-w-5xl'
      id='agenda'
    >
      <Heading title='Agenda' />
      <ul className='flex flex-wrap items-stretch justify-center grid-cols-1 gap-4 mx-auto place-items-center center lg:grid-cols-2 lg:justify-start'>
        <EventCard
          talkName={'Build a Serverless Web Store'}
          speakerName={'Developer Cool'}
          description={'A cool talk about cool stuff'}
        />
        <EventCard
          talkName={'Randomly talking about some longer stuff'}
          speakerName={'Big Name In Tech'}
          description={'A neat talk about neat stuff'}
        />
        <EventCard
          talkName={
            'Building a 100% Serverless Blog Site Application with the Right Observability'
          }
          speakerName={'Developer Cool'}
        />
        <EventCard
          talkName={'Another mock talk for testing purposes'}
          speakerName={'Developer Cool'}
        />
        <EventCard
          talkName={'Whatever this may be'}
          speakerName={'Developer Cool'}
        />
        <EventCard
          talkName={'Cool stuff ahead, my man'}
          speakerName={'Developer Cool'}
        />
        <EventCard
          talkName={'Wowowowowow congrats on the talk'}
          speakerName={'Developer Cool'}
        />
      </ul>
    </div>
  );
};

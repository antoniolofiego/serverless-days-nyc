import { Heading } from './Heading';
import { EventCard } from './EventCard';
import { talks } from '../data/talks';

export const Agenda = () => {
  return (
    <div
      className='flex flex-col justify-center max-w-md mx-auto scroll-mt-28 sm:max-w-xl lg:max-w-5xl'
      id='agenda'
    >
      <Heading title='Agenda' />
      <ul className='flex flex-wrap items-stretch justify-center grid-cols-1 gap-4 mx-auto place-items-center center lg:grid-cols-2 lg:justify-start'>
        {talks.map((talk, i) => {
          return (
            <EventCard
              key={i}
              talkName={talk.talkName}
              speakerName={talk.speakerName}
              id={talk.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

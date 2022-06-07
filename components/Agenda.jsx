import { Heading, EventCard } from '../components';
import { talks } from '../data/talks';

export const Agenda = () => {
  return (
    <div
      className='flex flex-col items-center max-w-md mx-auto scroll-mt-28 sm:max-w-xl lg:max-w-5xl'
      id='agenda'
    >
      <Heading title='Talks Agenda' />
      <ul className='flex flex-wrap items-stretch justify-center grid-cols-1 gap-4 mx-auto place-items-center center lg:grid-cols-2 lg:justify-center'>
        {talks.map((talk, i) => {
          return (
            <EventCard
              key={i}
              talkName={talk.talkName}
              speaker={talk.speaker}
              time={talk.time}
              id={talk.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

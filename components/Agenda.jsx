import { Heading, EventCard } from '../components';
import { talks } from '../data/talks';

export const Agenda = () => {
  return (
    <div
      className='flex flex-col items-center max-w-md mx-auto scroll-mt-28 sm:max-w-xl lg:max-w-5xl'
      id='agenda'
    >
      <Heading title='Conference Agenda' />
      <div className='max-w-md pb-16 mx-auto space-y-8 lg:max-w-5xl md:max-w-2xl sm:max-w-xl'>
        <p>
          Doors open at 9:00am and continental breakfast will be served until the
          talks begin at 10:00am. Lunch is provided and snacks and beverages will
          be available throughout the day.
        </p>

        <p>
          After lunch we have four topic tables organized by our sponsors before
          returning to an afternoon session full of great talks!
        </p>

        <p>
          The event ends with a closing keynote wrapping up at 5:00pm. Although
          there is no formal after-party planned, we encourage you to explore
          Times Square with your fellow serverless builders - old friends and 
          new!
        </p>
      </div>

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

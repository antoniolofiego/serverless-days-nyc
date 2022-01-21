import { SpeakerCard } from './SpeakerCard';
import { Heading } from './Heading';

export const Speakers = () => {
  const speakers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='my-8 space-y-4 scroll-mt-28' id='speakers'>
      <Heading title='Speakers' />

      <div className='pt-4 mx-auto space-y-4 max-w-7xl'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
          {speakers.map((_, i) => {
            return <SpeakerCard key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

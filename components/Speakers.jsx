import { SpeakerCard, Heading } from '../components';

export const Speakers = () => {
  const speakers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='my-8 space-y-4 scroll-mt-28' id='speakers'>
      <Heading title='Speakers' />

      <div className='max-w-5xl pt-4 mx-auto space-y-4'>
        <div className='grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {speakers.map((_, i) => {
            return <SpeakerCard key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

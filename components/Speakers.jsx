import { SpeakerCard } from './SpeakerCard';

export const Speakers = () => {
  const speakers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='my-8 space-y-4 scroll-mt-28' id='speakers'>
      <div className='flex mx-auto'>
        <span className='pb-8 mx-auto text-4xl font-bold tracking-wide border-b-2 font-title dark:text-gray-50 light:text-gray-900'>
          Speakers
        </span>
      </div>

      <div className='max-w-4xl pt-4 mx-auto space-y-4'>
        <SpeakerCard keynote />
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {speakers.map((_, i) => {
            return <SpeakerCard key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

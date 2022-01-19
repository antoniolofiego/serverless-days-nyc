import { SpeakerCard } from './SpeakerCard';
export const Speakers = () => {
  const speakers = [1, 2, 3, 4, 5, 6];
  return (
    <div className='my-8 scroll-mt-28 space-y-4' id='speakers'>
      <div className='flex mx-auto'>
        <span className='text-4xl font-bold font-title tracking-wide pb-8 border-b-2 mx-auto'>
          Speakers
        </span>
      </div>

      <div className='max-w-4xl mx-auto pt-4 space-y-4'>
        <SpeakerCard keynote />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {speakers.map((_, i) => {
            return <SpeakerCard key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

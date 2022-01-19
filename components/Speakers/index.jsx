import { SpeakerCard } from './SpeakerCard';
export const Speakers = () => {
  const speakers = [1, 2, 3, 4, 5, 6];
  return (
    <div className='my-8 space-y-4'>
      <SpeakerCard keynote />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {speakers.map((_, i) => {
          return <SpeakerCard key={i} />;
        })}
      </div>
    </div>
  );
};

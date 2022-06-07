import Image from 'next/image';

export const EventModalCard = ({
  talkName,
  speaker,
  description,
  time,
  empty,
}) => {
  return (
    <>
      {empty ? (
        <div className='w-full h-full max-w-4xl p-12 mx-12 mb-6 shrink-0' />
      ) : (
        <div className='z-50 flex flex-col items-center justify-center px-4 py-2 my-auto mt-2 space-y-8 md:grid md:grid-cols-5 md:gap-4'>
          <div className='flex flex-col items-center justify-center col-span-3 space-y-4'>
            <h2 className='text-2xl font-bold tracking-normal font-title'>
              {talkName}
            </h2>
            <p className='text-sm'>{description}</p>
          </div>
          <div className='flex flex-col items-center justify-center col-span-2 space-y-8'>
            <div className='relative hidden w-32 h-32 rounded-lg md:block user-logo'>
              <Image
                className='object-cover rounded-lg shadow md:w-32 md:h-32'
                src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80'
                alt='avatar'
                layout='fill'
              />
            </div>
            <div className='space-y-4 text-center'>
              <h2 className='text-lg tracking-tighter'>
                <a
                  href={`https://twitter.com/${speaker.twitter}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  {speaker.name}
                </a>
              </h2>
              <span>{speaker.company}</span>
              <p>{time}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

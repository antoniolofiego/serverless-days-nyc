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
          <div className='flex flex-col items-center justify-center col-span-2 space-y-8 md:items-end'>
            <div className='relative hidden rounded-lg w-36 h-36 md:block user-logo'>
              <Image
                className='object-cover rounded-lg shadow w-36 h-36'
                src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80'
                alt='avatar'
                layout='fill'
              />
            </div>
            <div className='space-y-6 text-center md:text-right'>
              <h2 className='text-3xl tracking-tighter'>
                <a
                  href={`https://twitter.com/${speaker.twitter}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  {speaker.name}
                </a>
              </h2>
              <span className='text-xl'>{speaker.company}</span>
              <p>{time}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

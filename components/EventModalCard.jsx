import Image from 'next/image';

export const EventModalCard = ({
  talkName,
  speakerName,
  description,
  time,
  empty,
}) => {
  return (
    <>
      {empty ? (
        <div className='w-full h-full max-w-4xl p-12 mx-12 mb-6 shrink-0' />
      ) : (
        <div className='z-50 px-4 py-2 my-auto mt-2 space-y-4'>
          <h2 className='text-2xl font-bold tracking-normal font-title'>
            {talkName}
          </h2>
          <p className='px-4 text-sm'>{description}</p>

          <div className='flex items-center space-x-2'>
            <div className='relative w-12 h-12 user-logo'>
              <Image
                className='object-cover w-12 h-12 mx-4 rounded-full shadow'
                src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80'
                alt='avatar'
                layout='fill'
              />
            </div>
            <div>
              <h2 className='text-sm tracking-tighter divide-x-2 '>
                <a href='#' className='pr-2'>
                  By {speakerName}
                </a>
                <span className='pl-2'>Developer @ Company</span>
              </h2>
              <p>{time}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

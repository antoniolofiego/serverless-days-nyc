import { AnimatingDiv } from '../components';

export const About = () => {
  return (
    <AnimatingDiv
      id='about'
      className='flex flex-col py-8 space-y-6 scroll-mt-28'
    >
      <div className='flex flex-col justify-center max-w-md mx-auto space-y-8 md:max-w-2xl sm:max-w-xl lg:grid lg:grid-cols-2 lg:max-w-none lg:mx-0'>
        <div className='mx-auto space-y-4 text-center lg:self-center lg:text-left'>
          <h2 className='text-xl text-gray-500 dark:text-gray-300'>
            This year&apos;s focus
          </h2>
          <h3 className='text-4xl font-extrabold font-title'>
            Serverless for Everyone
          </h3>
        </div>
        <div className='space-y-6 lg:self-center'>
          <p>
            Large organizations have led the way in adopting serverless, using
            their scale to educate development teams, build specialized skills,
            and standardize across platforms.
          </p>
          <p>
            Now, platforms and frameworks like Serverless Cloud, Next.js, and
            SvelteKit enable solo developers and smaller teams to go serverless
            faster than ever!
          </p>
          <p>
            This year&apos;s conference is for builders in small teams who want
            to get their applications in front of users as quickly as possible.
          </p>
          <p>
            The keynote, sessions, and optional workshops all focus on how you
            can deliver value without large investments in time and training.
          </p>
          <p className='text-xl text-center lg:text-left'>
            It&apos;s serverless that works for you!
          </p>
        </div>
      </div>
    </AnimatingDiv>
  );
};

export const Heading = ({ title }) => {
  return (
    <div className='flex mx-auto mb-8'>
      <h2 className='pb-8 mx-auto text-4xl font-bold tracking-wide border-b-2 border-blue-900 dark:border-gray-50 font-title dark:text-gray-50 light:text-gray-900'>
        {title}
      </h2>
    </div>
  );
};

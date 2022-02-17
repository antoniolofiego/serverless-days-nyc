import { compareDesc } from 'date-fns';

export const TimelineItem = ({ dateCopy, nextDate }) => {
  const { title, url, description } = dateCopy;

  const stepDate = new Date(dateCopy.date);
  const nextStepDate = new Date(nextDate);
  const currentDate = Date.now();

  const stepIsOngoing =
    compareDesc(currentDate, stepDate) !== 1 &&
    compareDesc(currentDate, nextStepDate) === 1;

  const stepIsOver =
    compareDesc(currentDate, stepDate) !== 1 &&
    compareDesc(currentDate, nextStepDate) !== 1;

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'December',
  ];

  return (
    <div
      className='relative flex items-center h-full group'
      aria-disabled={stepIsOver}
    >
      <div
        className={`hidden w-1/4 max-w-content ${
          stepIsOver && 'text-gray-500'
        }`}
      >
        <p
          className={`space-x-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 ${
            stepIsOver &&
            '!group-hover:text-gray-500 !text-gray-500 !dark:group-hover:text-gray-500'
          }`}
        >
          {monthNames[stepDate.getMonth()]}, {stepDate.getDate()}
        </p>
        <div
          className={`italic font-bold group-hover:text-gray-700 dark:group-hover:text-gray-300 stepIsOver &&
            '!group-hover:text-gray-500 !text-gray-500 !dark:group-hover:text-gray-500'
          }`}
        >
          2022
        </div>
      </div>

      <div
        className={`absolute z-10 h-full border-r-2 top-2 left-8 border-gray-900 dark:border-gray-50 group-hover:border-gray-700 dark:group-hover:border-gray-300 ${
          stepIsOver && '!border-gray-500 !dark:border-gray-500 border-dotted'
        } ${stepIsOngoing && 'border-dashed'}`}
      >
        <div
          className={`absolute w-5 h-5 -ml-[9px] bg-gray-900 group-hover:bg-gray-700 rounded-full dark:bg-gray-50 -top-1 dark:group-hover:bg-gray-300 group-hover:scale-125 translate-all duration-300 ${
            stepIsOver && '!bg-gray-500 !dark:bg-gray-500 group-hover:scale-100'
          }`}
        />
      </div>

      <div className={`pr-8 ml-16 ${stepIsOver && 'text-gray-500'}`}>
        <p className='mb-2 text-sm'>
          {monthNames[stepDate.getMonth()]}, {stepDate.getDate()} 2022
        </p>
        <h3 className='mb-4 text-xl font-bold'>{title}</h3>
        <div
          className='mb-8'
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

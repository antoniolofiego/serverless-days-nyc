import { compareDesc } from 'date-fns';
import { AnimatingDiv } from '../components';

export const TimelineItem = ({ dateCopy, nextDate }) => {
  const { title, description, url, ctaText } = dateCopy;

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
    <AnimatingDiv
      className='relative flex items-center h-full group'
      aria-disabled={stepIsOver}
    >
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
          {monthNames[stepDate.getMonth()]} {stepDate.getDate()}, 2022
        </p>
        <h3 className='mb-4 text-xl font-bold'>{title}</h3>
        <div
          className='mb-8'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {url && ctaText && (
          <a href={url} target='_blank '>
            <button
              disabled={!stepIsOngoing || stepIsOver}
              className='px-8 pt-3 pb-4 mb-8 transition-all bg-gray-800 rounded-full text-gray-50 dark:text-gray-800 dark:bg-gray-100 hover:bg-gray-400 dark:hover:bg-gray-200 font-title disabled:bg-gray-400'
            >
              {ctaText}
            </button>
          </a>
        )}
      </div>
    </AnimatingDiv>
  );
};

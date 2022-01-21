import { TimelineItem, Heading } from '../components';

export const Timeline = () => {
  const dateCopy = [
    {
      date: '2022-01-10 EST',
      title: 'CFP opens',
      url: 'http://example.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt natus blanditiis nam totam reiciendis molestiae autem impedit repudiandae minus eligendi a voluptatem voluptatum facere eveniet, at, sunt cumque officia.',
    },
    {
      date: '2022-1-18 EST',
      title: 'CFP closes',
      url: 'http://example.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt natus blanditiis nam totam reiciendis molestiae autem impedit repudiandae minus eligendi a voluptatem voluptatum facere eveniet, at, sunt cumque officia.',
    },
    {
      date: '2022-2-24 EST',
      title: 'Reviews done',
      url: 'http://example.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt natus blanditiis nam totam reiciendis molestiae autem impedit repudiandae minus eligendi a voluptatem voluptatum facere eveniet, at, sunt cumque officia.',
    },
  ];

  return (
    <div className='flex flex-col max-w-2xl mx-auto lg:max-w-5xl'>
      <Heading title='Important Dates' />
      {dateCopy.map((step, i, elements) => {
        return (
          <TimelineItem
            key={i}
            dateCopy={step}
            nextDate={elements[i + 1]?.date || '2022-05-20 EST'}
          />
        );
      })}
    </div>
  );
};

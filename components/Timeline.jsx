import { TimelineItem, Heading } from '../components';

export const Timeline = () => {
  // TODO: add actual timeline instead of mock one
  const dateCopy = [
    {
      date: '2022-01-12T11:59:59Z',
      title: 'CFP opens',
      url: 'http://example.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt natus blanditiis nam totam reiciendis molestiae autem impedit repudiandae minus eligendi a voluptatem voluptatum facere eveniet, at, sunt cumque officia.',
    },
    {
      date: '2022-02-12T11:59:59Z',
      title: 'CFP closes',
      url: 'http://example.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt natus blanditiis nam totam reiciendis molestiae autem impedit repudiandae minus eligendi a voluptatem voluptatum facere eveniet, at, sunt cumque officia.',
    },
    {
      date: '2022-03-12T11:59:59Z',
      title: 'Reviews done',
      url: 'http://example.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt natus blanditiis nam totam reiciendis molestiae autem impedit repudiandae minus eligendi a voluptatem voluptatum facere eveniet, at, sunt cumque officia.',
    },
  ];

  return (
    <div
      className='flex flex-col max-w-2xl mx-auto lg:max-w-5xl scroll-mt-28'
      id='dates'
    >
      <Heading title='Important Dates' />
      {dateCopy.map((step, i, elements) => {
        let nextDate = elements[i + 1]?.date;
        if (i + 1 === elements.length) {
          nextDate = '2022-05-20 EST';
        }

        return <TimelineItem key={i} dateCopy={step} nextDate={nextDate} />;
      })}
    </div>
  );
};

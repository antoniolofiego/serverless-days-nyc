import { TimelineItem, Heading } from '../components';

export const Timeline = () => {
  const dateCopy = [
    {
      date: '2022-02-24T00:00:00-05:00',
      title: 'CFP opens',
      url: 'http://example.com', // TODO: Add real PaperCall link
      ctaText: 'Submit your paper',
      description: `<p class='pb-4'>Do you have a rapid delivery success story you'd like to share? Do you work on a smaller team using next-generation frameworks to ship faster than your competition?</p><p>Submit your session and share your success with Serverless Days NYC attendees! Preference is given to sessions demonstrating lessons learned from delivering serverless projects. Talks that reference new frameworks and are being given for the first time or by first-time speakers are especially welcome.</p>`,
    },
    {
      date: '2022-04-10T00:00:00-05:00',
      title: 'CFP closes',
      description: `<p>The ServerlessDays NYC closes at midnight ET on April 24th, two months prior to the event. The team will start reviewing the submitted talks as soon as possible.</p>`,
    },
    {
      date: '2022-04-14T00:00:00-05:00',
      title: 'Reviews done',
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
          nextDate = '2022-06-20T12:00:00-05:00';
        }

        return <TimelineItem key={i} dateCopy={step} nextDate={nextDate} />;
      })}
    </div>
  );
};

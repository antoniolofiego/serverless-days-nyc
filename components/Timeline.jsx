import { TimelineItem, Heading } from '../components';

export const Timeline = () => {
  const dateCopy = [
    {
      date: '2022-02-24T00:00:00-05:00',
      title: 'CFP opens',
      url: 'https://www.papercall.io/serverlessdaynyc',
      ctaText: 'Submit your paper',
      description: `<p class='pb-4'>Do you have a rapid delivery success story you'd like to share? Do you work on a smaller team using next-generation frameworks to ship faster than your competition?</p><p>Submit your session and share your success with Serverless Days NYC attendees! Preference is given to sessions demonstrating lessons learned from delivering serverless projects. Talks that reference new frameworks and are being given for the first time or by first-time speakers are especially welcome.</p>`,
    },
    {
      date: '2022-04-24T00:00:00-05:00',
      title: 'CFP closes, review period',
      description: `<p>The CFP for ServerlessDays NYC 2022 closes at midnight ET on April 24th, two months prior to the event. The team will start reviewing the submitted talks.</p>`,
    },
    {
      date: '2022-05-24T00:00:00-05:00',
      title: 'Reviews done and speakers selected',
      description:
        'The Serverless Days NYC organizers will notify selected speakers as soon as possible after the CFP closes, but in all cases no later than May 24th.',
    },
  ];

  return (
    <section
      id='dates'
      className='flex flex-col max-w-xs mx-auto sm:max-w-md lg:max-w-4xl md:max-w-2xl scroll-mt-28'
    >
      <Heading title='Important Dates' />
      {dateCopy.map((step, i, elements) => {
        let nextDate = elements[i + 1]?.date;
        if (i + 1 === elements.length) {
          nextDate = '2022-06-24T12:00:00-05:00';
        }

        return <TimelineItem key={i} dateCopy={step} nextDate={nextDate} />;
      })}
    </section>
  );
};

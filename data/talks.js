export const talks = [
  {
    id: 0,
    talkName: 'Opening Keynote - The Past, Present, and Future of Serverless',
    speaker: { 
      name: 'Jeremy Daly', 
      twitter: 'jeremy_daly', 
      company: 'Serverless Inc' 
    },
    description: `Since the introduction of AWS Lambda in 2014, “serverless” has exploded into a vibrant ecosystem filled with a multitude of frameworks, services, tools, providers, and practices being adopted by startups and enterprises alike. In this session, we’ll look at the origins of serverless and where we are now. Then we’ll explore how companies are leveraging serverless, the evolving tools and processes they’re using to do so, and the emerging architectural patterns that are changing the way we build software.`,
    time: '10:10 AM',
  },
  {
    id: 1,
    talkName: 'Testing your Serverless Application',
    speaker: { 
      name: 'Talia Nassi', 
      twitter: 'talia_nassi', 
      company: 'AWS' 
    },
    description: `Whats the difference between testing a serverless application and testing a normal application? Do you have to write more integration tests? Join me in this presentation as I cover how to test your serverless applications, and give you some tips to make sure you're doing it efficiently.`,
    time: '10:40 AM',
  },
  {
    id: 2,
    talkName: '"Minumum Viable Migrations" - A Migration Path to Serverless',
    speaker: {
      name: 'Ben Ellerby',
      twitter: 'EllerbyBen',
      company: 'Aleios, AWS Serverless Hero',
    },
    description: `Approaches to migrate to Serverless often lack the agility needed to ensure success. Thinking in terms of events provides a path to state-of-the-art Event-Driven Serverless. We'll see how Minimum Viable Migrations provide a path to Serverless using a real world airline's journey as an example.`,
    time: '11:40 AM',
  },
  {
    id: 3,
    talkName: 'How to deal with persistence in serverless applications?',
    speaker: {
      name: 'Marc Duiker',
      twitter: 'marcduiker',
      company: 'Ably',
    },
    description: `Serverless means stateless, right? But surely serverless applications need to persist some state somewhere. What are the right choices for storage solutions that fit a serverless architecture? Join this session to learn about various options in the Azure cloud.`,
    time: '12:20 PM',
  },
  {
    id: 4,
    talkName: 'Coming soon!',
    speaker: { 
      name: 'Rita Kozlov', 
      twitter: 'ritakozlov_', 
      company: 'Cloudflare' 
    },
    description: `Coming soon!`,
    time: '2:15 PM',
  },
  {
    id: 5,
    talkName:
      'Automated Serverless Security Testing: Delivering Secure Apps Continuously',
    speaker: { 
      name: 'Michael Khusid', 
      twitter: 'contrastsec', 
      company: 'Contrast Security' 
    },
    description: `Serverless technology drives efficiency for developers, but legacy application security tools provide little benefit because they lack context. But there's a better way. This session presents a completely frictionless way of testing serverless applications automatically—no scripts, tests, or delays.`,
    time: '2:55 PM',
  },
  {
    id: 6,
    talkName: 'How to Fail at Serverless (Without Even Trying)',
    speaker: { 
      name: 'Kam Lasater', 
      twitter: 'seekayel', 
      company: 'Cyclic.sh' 
    },
    description: `Serverless is great. I love serverless. I'm not always sure serverless loves me. I want to share some of the ways I've failed with serverless apps going from local, to deployed, to running with production workloads.`,
    time: '3:55 PM',
  },
  {
    id: 7,
    talkName:
      'Rendering 3D Scenes With Blender on AWS Lambda, How We Got There',
    speaker: { 
      name: 'JR Beaudoin', 
      twitter: 'jiherr', 
      company: 'Theodo' 
    },
    description:
      'We built a service that renders 3D scenes with Blender on AWS Lambda. It reduced the time between the moment when physical materials were scanned and their availability in a design tool. I will share the architecture of this system as well as the analysis of the different solutions we considered.',
    time: '4:25 PM',
  },
];

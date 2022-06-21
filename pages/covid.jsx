import { Heading } from '../components';

const CovidPolicy = () => {
  return (
    <div className='max-w-md pb-16 mx-auto space-y-8 lg:max-w-5xl md:max-w-2xl sm:max-w-xl'>
      <Heading title='COVID-19 Policy' />
      <p>
        ServerlessDays NYC 2022 is following the COVID-19 policy of our Venue
        Sponsor, the Microsoft Reactor at Eleven Times Square.
      </p>

      <h2 className='text-2xl font-bold'>TL;DR:</h2>

      <ul>
        <li>
          Proof of vaccination or negative COVID test within the last seven days is <strong>mandatory</strong>.
        </li>
        <li>
          We <strong>strongly recommend</strong> wearing masks inside the 
          venue at all times except when eating or drinking.
        </li>
        <li>
          ServerlessDays NYC 2022 organizers will lead by example and mask
          at all times to create an environment where all attendees feel
          comfortable attending.
        </li>
      </ul>      
      
      <h2 className='text-2xl font-bold'>Microsoft's Vaccination Policy</h2>

      <p>
        (Updated March 7, 2022)
      </p>  
      
      <p>
        Guests and customers will be able to provide 
        proof of vaccination via the <a href="https://msrtw.powerappsportals.com/en-US/" target="_blank">HealthCheck portal</a> or self-attest to having 
        received a negative COVID-19 test within the last 7 days. 
      </p>

      <p>
        Microsoft is not able to offer an alternative process for guests and 
        customers who can neither provide proof of vaccination nor attest to a 
        negative test result in the last 7 days.
      </p>

      <p>
        Microsoft's vaccination policy will be enforced for all employees, 
        visitors, external staff, guests, and customers.
      </p>

      <p>
        Guests and customers should follow local requirements for face 
        coverings. For NYC, this currently means face coverings are optional, 
        but suggested. Specifically, the NY State Department of Health 
        recommends <a href="https://health.ny.gov/press/releases/2022/2022-05-13_covid_mask_recommendation.htm" target="_blank">"all New Yorkers in high-risk counties ... wear masks in 
        indoor public spaces, regardless of vaccination status."</a>
      </p>

      <p>
        ServerlessDays NYC <strong>strongly recommends</strong> wearing masks 
        inside the venue at all times except when eating or drinking. 
        Organizers will lead by example and mask at all times to create an 
        environment where all attendees feel comfortable attending.
      </p>
    </div>
  );
};

export default CovidPolicy;

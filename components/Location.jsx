import { AnimatingDiv, Map } from '../components';

const location = {
  address: {
    name: 'Microsoft Reactor',
    street: '11 Times Square',
    city: 'New York, NY 10036',
  },
  lat: 40.75677536749415,
  lng: -73.989747052186,
};

export const Location = () => {
  return (
    <AnimatingDiv id='location' className='scroll-mt-28'>
      <Map location={location} zoomLevel={13} />
    </AnimatingDiv>
  );
};

import { AnimatingDiv, Map } from '../components';

const location = {
  address: {
    name: 'Microsoft Reactor',
    street: '335 Madison Ave',
    city: 'New York, NY 10017',
  },
  lat: 40.75367938954828,
  lng: -73.9781039152475,
};

export const Location = () => {
  return (
    <AnimatingDiv id='location'>
      <Map location={location} zoomLevel={13} />
    </AnimatingDiv>
  );
};

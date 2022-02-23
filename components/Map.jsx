import GoogleMapReact from 'google-map-react';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { Heading } from '../components';

const LocationPin = ({ text }) => (
  <div className='flex items-center p-2 w-72 '>
    <LocationMarkerIcon className='h-8 text-slate-800' />
    <section className='px-4 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900'>
      <p>{text.name}</p>
      <p>{text.street}</p>
      <p>{text.city}</p>
    </section>
  </div>
);

export const Map = ({ location, zoomLevel }) => (
  <div className='w-full scroll-mt-28'>
    <Heading title='Location' />

    <div className='w-full h-[60vh] rounded-2xl overflow-hidden'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

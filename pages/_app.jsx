import '../styles/globals.css';
import { Navbar } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className='pt-36'>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;

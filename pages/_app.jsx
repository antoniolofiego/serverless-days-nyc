import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Navbar />
      <main className='pt-36'>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;

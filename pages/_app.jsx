import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar, ActiveBreakpoint } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <ActiveBreakpoint>
      <ThemeProvider attribute='class'>
        <Navbar />
        <main className='pt-36'>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </ActiveBreakpoint>
  );
}

export default MyApp;

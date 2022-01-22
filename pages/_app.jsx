import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar, ActiveBreakpoint } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <ActiveBreakpoint>
      <ThemeProvider attribute='class'>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </ActiveBreakpoint>
  );
}

export default MyApp;

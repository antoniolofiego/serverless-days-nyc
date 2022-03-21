import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar, ActiveBreakpoint, Footer } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <ActiveBreakpoint>
      <ThemeProvider attribute='class'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ActiveBreakpoint>
  );
}

export default MyApp;

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className='scroll-smooth'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat&display=optional'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans&display=optional'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-gradient-to-tl from-blue-200 to-transparent'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

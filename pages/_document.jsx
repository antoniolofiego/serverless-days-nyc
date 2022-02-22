import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className='transition scroll-smooth' lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Lato&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-gradient-to-tl from-blue-200 dark:from-blue-900 to-transparent dark:to-black'>
          <Main />
          <NextScript />
          <div id='modal-root'></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

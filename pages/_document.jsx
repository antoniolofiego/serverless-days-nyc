import Document, { Html, Head, Main, NextScript } from 'next/document';
import { DefaultSeo } from 'next-seo';
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
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_EN',
            url: 'https://nyc.serverlessdays.io/',
            site_name: 'ServerlessDays NYC',
          }}
          twitter={{
            cardType: 'summary_large_image',
          }}
        />

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

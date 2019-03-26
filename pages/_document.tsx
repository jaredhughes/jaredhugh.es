import Document, { Head, Main, NextScript } from 'next/document'
import GoogleAnalytics from './partials/google_analytics'

class MyDocument extends Document {
  public static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  public render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            href='https://fonts.googleapis.com/css?family=Ubuntu+Mono|Playfair+Display|Raleway:400,600,800'
            rel='stylesheet'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/static/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/static/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/static/favicon-16x16.png'
          />
          <link rel='manifest' href='/static/site.webmanifest' />
          <meta property='og:image' content='/static/jared-hughes.jpg' />
          <GoogleAnalytics />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument

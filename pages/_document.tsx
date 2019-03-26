import Document, { Head, Main, NextScript } from 'next/document'
import GoogleAnalytics from './_partials/google_analytics'
import LinkFonts from './_partials/link_fonts'
import MetaImages from './_partials/meta_images'

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
          <link rel='manifest' href='/site.webmanifest' />
          <LinkFonts />
          <MetaImages />
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

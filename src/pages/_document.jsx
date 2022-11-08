import { Head, Html, Main, NextScript } from 'next/document'
import clsx from 'clsx'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Raleway:wght@800&display=swap"
        />
      </Head>
      <body className="flex h-full flex-col">
      <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-VBKDKMP3DW" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
      />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import Head from 'next/head'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import  Services  from '@/components/Services'
import Contact from "@/components/Contact";
import Team from "@/components/Team";


export default function Home() {
  return (
    <>
      <Head>
        <title>Croke &amp; Co</title>
        <meta
          name="description"
          content="CROKE & COMPANY exists to support public interest causes and progressive campaigns. We harness decades of strategic public communications, video production and web development services to help our clients thrive."
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','G-VBKDKMP3DW');`,
                    }}
        />

      </Head>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
        <Team />
      </main>
      <Footer />

    </>
  )
}

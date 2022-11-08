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

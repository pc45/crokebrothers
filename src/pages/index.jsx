import Head from 'next/head'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import  Services  from '@/components/Services'
import Contact from "@/components/Contact";

export default function Home() {

  return (
    <>
      <Head>
        <title>Croke &amp; Co</title>
        <meta
          name="description"
          content="CROKE & COMPANY exists to support public interest causes and progressive campaigns. We harness decades of strategic public communications, video production and web development services to help our clients thrive."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

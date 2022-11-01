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
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto aut beatae eum libero pariatur suscipit voluptas! Praesentium, sunt voluptate?"
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

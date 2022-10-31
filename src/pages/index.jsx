import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Clients } from "@/components/Clients";
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
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Clients />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

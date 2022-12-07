import { Container } from '@/components/Container'
import Link from 'next/link'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20">
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-croke sm:text-4xl">
            About Us
          </h2>
          <p className=" mt-4 text-lg tracking-tight text-slate-700">
            Croke & Company is a strategic communications firm that offers video
            production, web design, polling, and research to organizations and
            individuals who are dedicated to the public interest and the common
            good. We are specially equipped to help progressive causes,
            companies, and campaigns thrive. We cut through nonsense and noise -
            to widen your reach, amplify your success, and prepare you to
            navigate any public challenge. We believe in using plain language,
            elegant design, and humor to support our partners. Our goal is to
            harness shared expertise to help build a better, safer, more
            inclusive world.
          </p>
        </div>
      </Container>
    </section>
  )
}

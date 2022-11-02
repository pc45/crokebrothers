import { Container } from '@/components/Container'
import Link from "next/link";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20"
    >

      <Container className="relative">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-lg font-semibold text-croke-100">Who we are</h2>
          <p className="font-display text-3xl tracking-tight text-croke sm:text-4xl">
            About
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            CROKE & COMPANY exists to support public interest causes and progressive campaigns. We harness decades of strategic public communications, video production and web development services to help our clients thrive.
          </p>
        </div>
      </Container>
    </section>
  )
}

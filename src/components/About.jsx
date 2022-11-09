import { Container } from '@/components/Container'
import Link from "next/link";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20"
    >

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-lg font-semibold text-croke-100">Who we are</h2>
          <p className="font-display text-3xl tracking-tight text-croke sm:text-4xl">
            About
          </p>
          <p className=" mt-4 text-lg tracking-tight text-slate-700">
            Croke & Co. exists to help causes, companies, and campaigns thrive. We harness all the policy, political, media, technical, and human expertise we can muster to build a better, safer, more inclusive world.
          </p>
        </div>
      </Container>
    </section>
  )
}

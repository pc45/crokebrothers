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
            We're open to serving any business, organization, or individual interested in advancing the public interest and the common good.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            We have been privileged to work for leaders whose progressive values we share: inclusion, equality of opportunity, and respect for marginalized people. Our commitment to those goals is stronger than ever.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            <Link href="#contact"><a className="text-croke-300 hover:text-croke-600"> Reach out </a></Link> if you have questions or might like to partner with us on a project!
          </p>
        </div>
      </Container>
    </section>
  )
}

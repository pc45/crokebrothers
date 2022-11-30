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
            Croke & Company is a strategic communications company dedicated to the public interest and the common good. We are specially equipped to help progressive causes, companies, and campaigns thrive. We harness all the policy, political, media, technical, and human expertise we can muster to build a better, safer, more inclusive world.
          </p>
          <div className="mt-12 aspect-w-16 aspect-h-9">
            <iframe title="vimeo-player"
                    src="https://player.vimeo.com/video/776358925?h=c94d54bdfd"
                    width="640" height="360" frameBorder="0"
                    allowFullScreen></iframe>
          </div>
        </div>
      </Container>
    </section>
  )
}

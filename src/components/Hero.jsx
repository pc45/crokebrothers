import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'

const divStyle = {
  backgroundImage: 'url(images/bgtest.jpg)',
};

export function Hero() {
  return (
    <Container className="py-20 text-center bg-cover bg-center px-0">
      <h1 className="mx-auto uppercase max-w-4xl font-display text-5xl font-medium tracking-tight text-croke sm:text-7xl">
        Croke{' '}
        <span className="relative whitespace-nowrap text-croke-300">

          <span className="relative">&amp;</span>
        </span>{' '}
        Company
      </h1>
      <h2 className=" text-2xl mx-auto mt-6 max-w-3xl text-lg tracking-tight text-slate-700 font-bold italic">
        Public Interest Problem Solving | Project Management | Persuasion
      </h2>
      <div className="mt-10 flex justify-center space-x-6">
        <ButtonLink href="#contact" className="bg-croke-300">Partner with us</ButtonLink>
        <ButtonLink
          href="#"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-croke-300 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </ButtonLink>
      </div>

    </Container>
  )
}

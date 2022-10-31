import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <Container className="pt-10 pb-16 text-center lg:pt-16">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Croke{' '}
        <span className="relative whitespace-nowrap text-red-600">

          <span className="relative">&amp;</span>
        </span>{' '}
        Company
      </h1>
      <h3 className=" text-2xl mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Building on two decades of service to government, university, and nonprofit leaders
      </h3>
      <div className="mt-10 flex justify-center space-x-6">
        <ButtonLink href="/register">Call to Action</ButtonLink>
        <ButtonLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-red-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </ButtonLink>
      </div>

    </Container>
  )
}

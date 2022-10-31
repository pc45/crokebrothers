import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            I’m open to serving any business, organization, or individual interested in advancing the public interest and the common good.
          </p>
          <p className="mt-4 text-lg tracking-tight text-white">
            I have been privileged to work for leaders whose progressive values I share: inclusion, equality of opportunity, and respect for marginalized people. My commitment to those goals is stronger than ever.
          </p>
          <p className="mt-4 text-lg tracking-tight text-white">
            Reach out if you have questions or might like to partner with me on a project!
          </p>

        </div>
      </Container>
    </section>
  )
}

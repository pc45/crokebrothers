import Image from "next/image";
import logoTransistor from "@/images/logos/transistor.svg";
import logoTuple from "@/images/logos/tuple.svg";
import logoStaticKit from "@/images/logos/statickit.svg";
import logoMirage from "@/images/logos/mirage.svg";
import logoLaravel from "@/images/logos/laravel.svg";
import logoStatamic from "@/images/logos/statamic.svg";
import { Container } from '@/components/Container'

export function Clients() {
  return (
      <section
          id="clients"
          aria-labelledby="clients-title"
          className="pb-14 sm:pb-20 lg:pb-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2
                id="clients-title"
                className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
            >
              Our Clients Include
            </h2>
            <ul className="mt-8 flex items-center justify-center space-x-8 sm:flex-col sm:space-x-0 sm:space-y-10 xl:flex-row xl:space-y-0 xl:space-x-12">
              <li>
                <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
                  <li className="flex">
                    <Image
                        src={logoTransistor}
                        alt="Transistor"
                        layout="fixed"
                        unoptimized
                    />
                  </li>
                  <li className="flex">
                    <Image src={logoTuple} alt="Tuple" layout="fixed" unoptimized/>
                  </li>
                  <li className="flex">
                    <Image
                        src={logoStaticKit}
                        alt="StaticKit"
                        layout="fixed"
                        unoptimized
                    />
                  </li>
                </ul>
              </li>
              <li>
                <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
                  <li className="flex">
                    <Image
                        src={logoMirage}
                        alt="Mirage"
                        layout="fixed"
                        unoptimized
                    />
                  </li>
                  <li className="flex">
                    <Image
                        src={logoLaravel}
                        alt="Laravel"
                        layout="fixed"
                        unoptimized
                    />
                  </li>
                  <li className="flex">
                    <Image
                        src={logoStatamic}
                        alt="Statamic"
                        layout="fixed"
                        unoptimized
                    />
                  </li>
                </ul>
              </li>
            </ul>
      </div>
        </Container>
      </section>
  )
}

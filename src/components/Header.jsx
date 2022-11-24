import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-croke-300"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <li>
                  <Link href="#services">
                    <a className="block w-full" onClick={() => close()}>
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#team">
                    <a className="block w-full" onClick={() => close()}>Our Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    <a className="block w-full" onClick={() => close()}>Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href="#about">
                    <a className="block w-full" onClick={() => close()}>
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="tel:636-336-2428" className="flex items-center">
                    <PhoneIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                    <span className="ml-3">
                    636-336-2428
                  </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:team@crokeandco.com" className="flex items-center">
                    <EnvelopeIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                    <span className="ml-3">
                    team@crokeandco.com
                  </span>
                  </a>
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export function Header() {
  return (
    <header className="bg-croke">
      <Container className="flex justify-between items-center">
        <nav className="relative z-50 text-sm flex">
          <ul className="flex items-center">
            <li>
              <Link href="#">
                <a>
                  <span className="sr-only">Home</span>
                  <Logo />
                </a>
              </Link>
            </li>
            <li className="ml-12 hidden md:block">
              <Link href="#services">
                <a className="font-display tracking-tight font-bold text-lg rounded-md p-1 text-white hover:bg-croke-200 hover:text-slate-900">
                  Services
                </a>
              </Link>
            </li>
            <li className="ml-4 hidden md:block ">
              <Link href="#team">
                <a className="font-display tracking-tight font-bold text-lg rounded-md p-1 text-white hover:bg-croke-200 hover:text-slate-900">
                  Our Team
                </a>
              </Link>
            </li>
            <li className="ml-4 hidden md:block ">
              <Link href="#contact">
                <a className="font-display tracking-tight font-bold text-lg rounded-md p-1 text-white hover:bg-croke-200 hover:text-slate-900">
                  Contact Us
                </a>
              </Link>
            </li>
            <li className="ml-4 hidden md:block">
              <Link href="#about">
                <a className="font-display tracking-tight font-bold text-lg rounded-md p-1 text-white hover:bg-croke-200 hover:text-slate-900">
                  About
                </a>
              </Link>
            </li>
            <li className="ml-48 -mr-1 md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex">
          <dl className="text-base tracking-tight font-display text-white flex justify-items-end space-x-4">
            <div>
              <dt className="sr-only">Phone number</dt>
              <dd className="hover:text-croke-300">
                <a href="tel:636-336-2428" className="flex justify-center items-center">
                  <PhoneIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span className="ml-3">
                    636-336-2428
                  </span>
                </a>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Email</dt>
              <dd className="hover:text-croke-300">
                <a href="mailto:team@crokeand.co" className="flex justify-center items-center">
                  <EnvelopeIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span className="ml-3">
                    team@crokeand.co
                  </span>
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </header>
  )
}

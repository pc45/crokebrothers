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
                  <Link href="#about">
                    <a className="block w-full" onClick={() => close()}>
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    <a className="block w-full">Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href="#team">
                    <a className="block w-full">Our Team</a>
                  </Link>
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
    <header className="py-4 bg-croke">
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
                <a className="font-display tracking-widest font-bold text-lg rounded-md py-1 px-2 text-white hover:bg-croke-200 hover:text-slate-900">
                  Services
                </a>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#about">
                <a className="font-display tracking-widest font-bold text-lg rounded-md py-1 px-2 text-white hover:bg-croke-200 hover:text-slate-900">
                  About
                </a>
              </Link>
            </li>
            <li className="ml-6 hidden md:block ">
              <Link href="#contact">
                <a className="font-display tracking-widest font-bold text-lg rounded-md py-1 px-2 text-white hover:bg-croke-200 hover:text-slate-900">
                  Contact Us
                </a>
              </Link>
            </li>
            <li className="ml-6 hidden md:block ">
              <Link href="#team">
                <a className="font-display tracking-widest font-bold text-lg rounded-md py-1 px-2 text-white hover:bg-croke-200 hover:text-slate-900">
                  Our Team
                </a>
              </Link>
            </li>
            <li className="ml-48 -mr-1 md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex">
          <dl className="text-base text-white flex justify-items-end space-x-4">
            <div>
              <dt className="sr-only">Phone number</dt>
              <dd className="hover:text-croke-300">
                <a href="tel:636-336-2428" className="flex justify-center">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                  <span className="ml-3">
                    636-336-2428
                  </span>
                </a>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Email</dt>
              <dd className="hover:text-croke-300">
                <a href="mailto:team@crokeand.co" className="flex justify-center">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
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

import React, { useState } from 'react'
import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(!modal)
  }

  return (
    <Container className="bg-center py-20 px-2 text-center">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium uppercase tracking-tight text-croke sm:text-7xl">
        Croke{' '}
        <span className="relative whitespace-nowrap text-croke-300">
          <span className="relative">&amp;</span>
        </span>{' '}
        Company
      </h1>
      <h2 className=" mx-auto mt-6 max-w-3xl text-2xl text-lg font-bold italic tracking-tight text-slate-700">
        Powerful Insight + Persuasive Content in the Public Interest
      </h2>
      <div className="mt-10 flex justify-center space-x-6">
        <button
          onClick={openModal}
          className="rounded-full bg-croke py-2 px-4 text-white hover:bg-croke-400 hover:text-slate-100 focus-visible:outline-croke active:bg-slate-800 active:text-slate-300"
        >
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="h-3 w-3 flex-none fill-croke-300 group-active:fill-current"
            >
              <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
            </svg>
            <span className="ml-3 text-sm font-semibold">Watch our video</span>
          </div>
          {modal ? (
            <div
              className="relative z-10"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center text-center">
                  <div className="relative z-50 w-full transform overflow-hidden overflow-y-auto rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:h-full sm:w-full sm:p-6 md:max-w-lg md:max-w-4xl">
                    <div>
                      <div className="mb-4 flex justify-end text-croke-300">
                        <svg
                          onClick={setModal}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="flex h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>

                      <div className="aspect-w-16 aspect-h-9">
                        <iframe
                          src="https://player.vimeo.com/video/266390715?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
                          width="640"
                          height="360"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </button>
        <ButtonLink href="#contact" className="bg-croke-300 hover:bg-croke-600">
          Work with us
        </ButtonLink>
      </div>
    </Container>
  )
}

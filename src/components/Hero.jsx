import React, {useState} from "react";
import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'



export function Hero() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

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
        Key Insight + Persuasive Content <br />in the Public Interest
      </h2>
      <div className="mt-10 flex justify-center space-x-6">
        <ButtonLink href="#contact" className="bg-croke-300">Partner with us</ButtonLink>
        <button onClick={openModal} className="rounded-full py-2 px-4 bg-croke text-white hover:bg-croke-400 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-croke">
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
              <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center text-center sm:items-center">
                    <div className="max-w-4xl relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all md:max-w-lg sm:my-8 sm:w-full md:max-w-4xl sm:p-6">
                      <div>
                        <div className="mt-3 text-center">
                          <div className="aspect-w-4 aspect-h-3">
                            <iframe
                                src="https://player.vimeo.com/video/266390715?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
                                width="640" height="360" frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen></iframe>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 sm:mt-6 text-center">
                        <a onClick={setModal}
                              href="#"
                              className="inline-flex w-48 justify-center rounded-md border border-transparent bg-croke-300 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-croke-600 focus:outline-none focus:ring-0 sm:text-sm">
                          Close
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ) : null}
        </button>
      </div>

    </Container>
  )
}

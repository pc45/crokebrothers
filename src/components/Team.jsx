import React, { useState, Fragment } from 'react'
import ryan from '@/images/rc.jpg'
import simon from '@/images/simon.jpg'
import kris from '@/images/kris.jpeg'
import justin from '@/images/Justin Cajindos_2020.jpg'
import juancarlos from '@/images/juan-carlos-donoso.jpg'
import pete from '@/images/pete.jpg'
import { Container } from '@/components/Container'
import { Dialog, Transition } from '@headlessui/react'
import { UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const people = [
  {
    name: 'Ryan Croke',
    role: 'Founder',
    imageUrl: ryan,
    bio: 'Ryan has served in key leadership roles in Illinois through periods of turbulence, crisis, and transition. As Chief of Staff in State government’s largest agency during the administration of Governor JB Pritzker, Ryan developed expertise in a wide range of pandemic-era health and human services issues across the country. Before that, he spearheaded a statewide association of nonprofits serving people with disabilities, and was responsible for campus safety, marketing, PR, HR, and government affairs as Associate Chancellor for Public Affairs the University of Illinois Springfield. From 2006-2015, he was a trusted advisor (including as Chief of Staff) to Illinois Governor Pat Quinn. He is the proud father of three kids with his wife Brook, and earned undergrad and masters degrees in communication at the University of Illinois at Urbana-Champaign.',
    linkedinUrl: 'https://www.linkedin.com/in/ryancroke/',
  },
  {
    name: 'Kristal Knight',
    role: 'Strategic Comms',
    imageUrl: kris,
    bio: 'Kristal is a veteran national news commentator and media expert who served as political director for Priorities USA, the largest Democratic super PAC during the 2020 election cycle. A seasoned trainer, Kristal advises candidates running for office and helps organizations develop political engagement programs. The founding executive director for Emerge Tennessee, a Democratic candidate-training program for women seeking public office, she helped elect over 25 women into local, county and state seats. Her career has included local and national campaigns and includes Hillary for America in 2016 and Obama for America in 2012. She earned a master’s degree in International Public Policy from University College London and a BA in Journalism from Howard University.',
    linkedinUrl: 'https://www.linkedin.com/in/kris-l-knight-334a366/',
  },
  {
    name: 'Simon Edelman',
    role: 'Video Production',
    imageUrl: simon,
    bio:
      'Simon Edelman is a five-time EMMY-award winning filmmaker with 20 years of experience in\n' +
      'TV, video and photography. \n' +
      'The founder of Syncro Studios, Simon is a versatile video producer with a wide range of marketing, political and advertising industry experience.',
    linkedinUrl: 'https://www.linkedin.com/in/simonedelman/',
  },
  /*{
    name: 'Juan Carlos Donoso',
    role: 'Partner - Polling',
    imageUrl: juancarlos,
    bio: 'Juan Carlos is a senior research scientist at the University of Chicago - AP-NORC Center for Public Affairs Research. Donoso is a political scientist whose research focuses on public opinion and political attitudes. He has significant experience managing complex multi-mode surveys in the US, Europe, and Latin America. He has designed, conducted, and managed surveys on a variety of global, national, statewide and local issues. Donoso was a senior survey researcher at the Institute for Social Research at the University of Michigan and Director of the Survey Research Center at the University of Illinois Springfield. A native of Ecuador, he partnered with local and international organizations such as the Constitutional Court of Ecuador and USAID to design and execute research projects on democracy development and rule of law.',
    linkedinUrl: 'https://www.linkedin.com/in/juan-carlos-donoso-288b27b5/',
  },*/
  {
    name: 'Justin Cajindos',
    role: 'Policy and Strategy',
    imageUrl: justin,
    bio: 'Justin is a versatile public affairs professional with experience advising federal and state government officeholders, including US Senator Dick Durbin, former Illinois Governor Pat Quinn, Illinois State Treasurer Mike Frerichs, and Oklahoma Senate Minority Leader Kay Floyd. He resides in Oklahoma City with his wife and two children. He has an array of campaign and government experience spanning more than 15 years. Outside of his work Justin studies law and serves on a parent-driven nonprofit board supporting art in public school classrooms.',
    linkedinUrl: 'https://www.linkedin.com/in/justin-cajindos-22766322/',
  },
  {
    name: 'Pete Croke',
    role: 'Web Services',
    imageUrl: pete,
    bio:
      'Pete has two decades of web development experience under his belt. Encompassing a wide array of verticals spanning everything from non profits to enterprise e-commerce, he builds solutions that are accessible, performant, client-driven, and user-focused. Whether you need to fine tune an existing website or build from the ground up, Pete has the technical and creative expertise and connections to complete any website on time\n' +
      'and under budget.',
    linkedinUrl: 'https://www.linkedin.com/in/pete-croke/',
  },
]

export default function Team() {
  const [open, setOpen] = useState(false)
  const [bio, setBio] = useState('')
  const [name, setName] = useState('')
  function configModal(thebio, thename) {
    setBio(thebio)
    setName(thename)
    setOpen(true)
  }

  return (
    <section id="team" className="relative overflow-hidden py-20">
      <Container>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="space-y-12">
              <div className="space-y-5 text-center sm:space-y-4">
                <h2 className="font-display text-3xl tracking-tight text-croke sm:text-4xl">
                  Our Team
                </h2>
                <p className="mx-auto max-w-prose text-xl text-slate-700">
                  Varied backgrounds; one goal: your success. This starts by
                  applying common sense - along with uncommon creativity, focus,
                  and empathy - to every project.
                </p>
              </div>
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-5 lg:gap-x-8 "
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-1 aspect-h-1 md:aspect-w-9 md:aspect-h-16">
                        <Image
                          src={person.imageUrl.src}
                          layout="fill"
                          objectFit="cover" // change to suit your needs
                          className="cursor-pointer rounded-md object-top shadow-lg grayscale hover:grayscale-0 md:object-center"
                          alt={person.name}
                          onClick={() => configModal(person.bio, person.name)}
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <h3 className="text-md text-base text-slate-700">
                              {person.name}
                            </h3>
                            <div>
                              <a
                                href={person.linkedinUrl}
                                target="_blank"
                                className="text-croke hover:text-croke-300"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <p className="text-md font-display tracking-tight text-croke">
                            {person.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-md bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-croke">
                      <UserIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {name}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{bio}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-croke-300 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-croke-600 focus:outline-none focus:ring-0 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  )
}

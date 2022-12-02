import { Container } from '@/components/Container'
import {
  ChatBubbleBottomCenterIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Strategy & PR',
    description:
      'Want to share good news, troubleshoot bad news, or improve public understanding of an important topic? Whether you need to build a coalition, manage a reputation, or move an audience, call us. We provide straightforward, well-informed advice to help you chart a smart, swift, shrewd course of action, no matter the issue. We bring broad, deep expertise in media relations, stakeholder outreach, internal communication, crisis management, news conference/interview/debate prep, training and coaching for executives, boards, and teams.',
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: 'Web & Video Production',
    description:
      'We build intuitive websites and produce persuasive video content, working hard to keep the creative process painless for you. Whether you need a functional, beautiful website quickly, or something more complex, we’ll bring your project to a successful launch. If you have a web presence but lack strong (or any) professional video content, call us! With Syncro Studios, we transform your ideas, announcements, one-pagers, catalogs, and reports into video masterpieces and can help you deliver them precisely to the audiences you need to reach.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Polling & Policy Research',
    description:
      'We design, conduct, and synthesize survey research to inform your mission and nourish your need for prompt, precise, compelling facts. We always share results and analysis in plain language to help you make smart, data-driven decisions. We can also use this work to strengthen your own proposals - whether it’s a pitch, grant application, or other competitive process. Public Policy subject matter expertise includes: \n' +
      'Health and Human Services; ' +
      'Public Infrastructure; \n' +
      'Higher Education; \n' +
      'Labor Relations; \n' +
      'Safety and Emergency Response.',
    icon: ChartBarIcon,
  },
]

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-croke-400 py-20"
    >
      <Container>
        <div className="relative bg-white py-20">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <p className="font-display text-3xl tracking-tight text-croke sm:text-4xl">
              Core Services
            </p>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col pt-6">
                    <div className="flex-1 rounded-md bg-slate-100 px-6 pb-8 shadow-md">
                      <div className="-mt-6">
                        <div className="mb-6">
                          <span className="inline-flex items-center justify-center rounded-md bg-croke-300 p-3 shadow-lg">
                            <feature.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="md:hidden">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="leading- flex w-full items-center justify-center rounded-lg px-4 py-2 text-left text-xl font-bold tracking-wide focus:outline-none focus-visible:ring focus-visible:ring-croke focus-visible:ring-opacity-75">
                                  <span className="font-display">
                                    {feature.name}
                                  </span>
                                  <ChevronRightIcon
                                    className={`h-6 w-6 ${
                                      open ? 'rotate-90 transform' : ''
                                    } `}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-left text-sm text-slate-700 md:text-center">
                                  {feature.description}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                        <div className="hidden md:block">
                          <h3 className="mt-8 font-display text-xl font-bold tracking-wide text-gray-900">
                            {feature.name}
                          </h3>
                          <p className="mt-5 text-base text-slate-700">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

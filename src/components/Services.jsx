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
    name: 'Strategic Comms, Coaching & Training',
    description:
      'Want to share good news, impact understanding of an issue, make a memorable introduction, or get ahead of a looming concern? Whether you need to build a coalition, change a reputation, or move an audience, we will customize a strategic plan and simplify its rollout - so you can focus on what matters most. Bottom line: we bring well-considered advice and expertise to inform internal and external communications, action and decision-making - and we can train you and your team to execute. We’re available for crisis consulting, but we are also willing to work with executives and their teams, including boards, to support and facilitate long-term, proactive training, recruitment, performance reviews, and leadership coaching.',
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: 'Web & Video Production',
    description:
      'We make intuitive websites and persuasive video content, working hard to keep the creative process painless for you. If you need a functional, beautiful website quickly and affordably, we will make it happen - or if you have a more complex project, we can launch that in close collaboration with your team. And if you have a web presence but lack strong (or any) professional video content, we’ll get it done! Video is a powerful, proven tool for changing minds, building brands, and generating sales. In partnership with Syncro Studios, we transform ideas, announcements, one-pagers, catalogs, and reports into persuasive video masterpieces for exactly the audiences you want to reach.',
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
            <p className="mx-auto mt-5 max-w-prose text-xl text-slate-700">
              We cut through nonsense and noise - to widen your reach, amplify
              your success, and prepare you to navigate any public challenge.
              Our team produces key insight and persuasive content - always in
              the public interest.
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
                        <Disclosure>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="leading- flex w-full items-center justify-center rounded-lg px-4 py-2 text-left text-xl font-bold tracking-wide focus:outline-none focus-visible:ring focus-visible:ring-croke focus-visible:ring-opacity-75">
                                <span>{feature.name}</span>
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

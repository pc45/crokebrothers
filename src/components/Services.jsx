import {Container} from "@/components/Container";
import {
  ChatBubbleBottomCenterIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Coaching, Strategic & Crisis Communication',
    description: 'We offer advice and expertise to inform action and decision-making, and can lead workshops and training for executives and boards to help navigate your priorities. Want to share good news, impact public understanding of an issue, service, or product, or get ahead of a looming concern? Whether you need to build a coalition, change, a reputation, or move an audience, we will customize a strategic plan and simplify its execution - so you can stay focused on what matters most.',
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: 'Web & Video Production',
    description: 'We build intuitive websites and produce compelling video content, and we make the creative process painless. If you already have a web presence but lack strong (or any) video content, we can help. Video is a powerful, proven tool for changing minds, building brands, and generating sales. We transform ideas, announcements, one-pagers, catalogs, and reports into persuasive video masterpieces for exactly the audiences you want to reach.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Polling & Policy Research',
    description: 'We design, conduct, and synthesize survey research to inform your mission and nourish your need for prompt, precise, compelling facts. We always share results and analysis in plain language to help you make smart, data-driven decisions. We can also use this work to strengthen your own proposals - whether it’s a pitch, grant application, or other competitive process. Public Policy subject matter expertise includes: Health and Human Services; Public Infrastructure; Higher Education; Safety and Emergency Response.',
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
                Drawing on experience, relationships, and trust with government, university, business, and trade association leaders, we cut through nonsense and noise - to widen your reach, amplify your success, and prepare you to navigate any public challenge.
              </p>
              <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature) => (
                  <div key={feature.name} className="pt-6 flex flex-col">
                    <div className="rounded-md bg-slate-100 px-6 pb-8 flex-1 shadow-md">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center rounded-md bg-croke-300 p-3 shadow-lg">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-display tracking-tight text-gray-900">{feature.name}</h3>
                        <p className="mt-5 text-base text-slate-700">{feature.description}</p>
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

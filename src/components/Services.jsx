import {Container} from "@/components/Container";
import {
  ChatBubbleBottomCenterIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Strategic Comms & Executive Coaching',
    description: 'Want to share good news, impact understanding of an issue, make a memorable introduction, or get ahead of a looming concern? Whether you need to build a coalition, change a reputation, or move an audience, we will customize a strategic plan and simplify its rollout - so you can focus on what matters most. Bottom line: we bring well-considered advice and expertise to inform internal and external communications, action and decision-making - and we can train you and your team to execute. We’re available for crisis consulting, but we are also willing to work with executives and their teams, including boards, to support and facilitate long-term, proactive training, recruitment, performance reviews, and leadership coaching.',
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: 'Web & Video Production',
    description: 'We make intuitive websites and persuasive video content, working hard to keep the creative process painless for you. If you need a functional, beautiful website quickly and affordably, we will make it happen - or if you have a more complex project, we can launch that in close collaboration with your team. And if you have a web presence but lack strong (or any) professional video content, we’ll get it done! Video is a powerful, proven tool for changing minds, building brands, and generating sales. In partnership with Syncro Studios, we transform ideas, announcements, one-pagers, catalogs, and reports into persuasive video masterpieces for exactly the audiences you want to reach.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Polling & Policy Research',
    description: 'We design, conduct, and synthesize survey research to inform your mission and nourish your need for prompt, precise, compelling facts. We always share results and analysis in plain language to help you make smart, data-driven decisions. We can also use this work to strengthen your own proposals - whether it’s a pitch, grant application, or other competitive process. Public Policy subject matter expertise includes: \n' +
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
                We cut through nonsense and noise - to widen your reach, amplify your success, and prepare you to navigate any public challenge.
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

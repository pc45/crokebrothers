import {Container} from "@/components/Container";
import {
  ChatBubbleBottomCenterIcon,
  VideoCameraIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Strategic Communication',
    description: 'Want to get ahead of a problem? Manage a crisis? React to a difficult event or share good news with the people who need to hear it? We’ll customize a strategy to strengthen your reputation and maximize your impact.',
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: 'Video Production',
    description: 'Video is a powerful, proven tool for changing minds, building brands, and generating sales. Let us transform your best ideas and lengthiest reports into persuasive video masterpieces for exactly the audience you want to reach.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Web Development',
    description: 'Turn your ideas into reality. From initial concepts and design, through site launch and maintenance, we’re there to execute — keeping every step of the process simple and painless for you.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Polling and Policy Research',
    description: 'We’ll design, conduct, and synthesize survey research to inform your mission and nourish your need for prompt, precise, compelling facts. We will always share results and analysis in plain language to help you make smart, data-driven decisions.',
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
                Building on two decades of service to government, university, and nonprofit leaders, Croke & Co. can help you navigate any public challenge.
              </p>
              <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {features.map((feature) => (
                  <div key={feature.name} className="pt-6 flex flex-col">
                    <div className="rounded-md bg-gray-50 px-6 pb-8 flex-1">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center rounded-md bg-croke-300 p-3 shadow-lg">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                        <p className="mt-5 text-base text-gray-500">{feature.description}</p>
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

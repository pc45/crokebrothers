import {Container} from "@/components/Container";
import {
  ChatBubbleBottomCenterIcon,
  VideoCameraIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Strategic & Crisis Communication',
    description: '',
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: 'Video Production',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Web Development & Design',
    description: 'Turn your ideas into reality. From initial concept through product launch, we\'re there to lead the way.',
    icon: ComputerDesktopIcon,
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
          <div className="relative bg-white sm:py-12 lg:py-16">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">

          <p className="font-display text-3xl tracking-tight text-croke sm:text-4xl">
            Core Services
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-slate-700">
            Building on two decades of service to government, university, and nonprofit leaders, Croke & Co. can help you navigate any public challenge.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
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

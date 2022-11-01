import {Container} from "@/components/Container";
import {
  ChatBubbleBottomCenterIcon,
  VideoCameraIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Strategic & Crisis Communication',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: 'Video Production',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Web Development & Design',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ComputerDesktopIcon,
  },
]

export default function Services() {
  return (
      <section
          id="services"
          aria-labelledby="services-title"
          className="bg-croke-400 pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
      >
        <Container>
          <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-croke-100">Experience Matters</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-croke sm:text-4xl">
            Services
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-slate-700">
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
            malesuada. Eleifend condimentum id viverra nulla.
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

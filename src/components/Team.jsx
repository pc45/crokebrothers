import ryan from '@/images/rc.jpg'
import simon from '@/images/simon.jpg'
import kris from '@/images/kris.jpeg'
import juancarlos from '@/images/juancarlos.jpeg'
import {Container} from "@/components/Container";
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'


const people = [
  {
    name: 'Ryan Croke',
    role: 'CEO',
    imageUrl: ryan,
    bio: 'Ryan has served in State government’s highest profile roles and agencies - helping manage and execute highly visible public responsibilities - during periods of turbulence, crisis, and transition. He was central to the development of Illinois\' broadband infrastructure investments for Governor Pat Quinn, and was Chief of Staff inside Illinois’ largest agency, the Department of Human Services, during the administration of Governor JB Pritzker. He is an active civic leader and community volunteer who earned undergrad and masters degrees in communication at the University of Illinois at Urbana-Champaign.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Kris Knight',
    role: 'Partner - Communications',
    imageUrl: kris,
    bio: 'Kristal is a veteran national news commentator and media expert who served as political director for Priorities USA, the largest Democratic super PAC during the 2020 election cycle. A seasoned trainer, Kristal advises candidates running for office and helps organizations develop political engagement programs. The founding executive director for Emerge Tennessee, a Democratic candidate-training program for women seeking public office, she helped elect over 25 women into local, county and state seats. Her career has included local and national campaigns and includes Hillary for America in 2016 and Obama for America in 2012. She earned a master’s degree in International Public Policy from University College London and a BA in Journalism from Howard University.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Simon Edelman',
    role: 'Partner - Video',
    imageUrl: simon,
    bio: 'Simon Edelman is a five-time EMMY-award winning filmmaker with 20 years of experience in\n' +
        'TV, video and photography. \n' +
        'The founder of Syncro Studios, Simon is a versatile video producer with a wide range of marketing, political and advertising industry experience.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Juan Carlos Donoso',
    role: 'Partner - Polling',
    imageUrl: juancarlos,
    bio: 'Juan Carlos is a senior research scientist at the University of Chicago - AP-NORC Center for Public Affairs Research. Donoso is a political scientist whose research focuses on public opinion and political attitudes. He has significant experience managing complex multi-mode surveys in the US, Europe, and Latin America. He has designed, conducted, and managed surveys on a variety of global, national, statewide and local issues. Donoso was a senior survey researcher at the Institute for Social Research at the University of Michigan and Director of the Survey Research Center at the University of Illinois Springfield. A native of Ecuador, he partnered with local and international organizations such as the Constitutional Court of Ecuador and USAID to design and execute research projects on democracy development and rule of law.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Pete Croke',
    role: 'Partner - Web',
    imageUrl: ryan,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id porta nisi, eget efficitur nibh. Etiam sit amet nibh vitae arcu pretium feugiat ut at tellus. Morbi turpis ante, dictum eget venenatis vitae, pulvinar sit amet ex. Nulla eu neque tempus, volutpat lorem id, placerat lorem. In interdum, nisi quis euismod mattis, neque erat viverra arcu, at volutpat arcu orci ut est. Maecenas scelerisque urna ex, quis imperdiet est imperdiet et. Pellentesque commodo id ante eget gravida. Suspendisse elementum gravida sem, a accumsan neque suscipit nec. Praesent non malesuada risus, in fermentum lectus. Vestibulum id dolor quis purus ultricies iaculis venenatis ac lacus. Praesent faucibus tempor ultrices. Sed lorem arcu, viverra a fringilla ut, ornare vitae erat. Nunc facilisis nibh erat, eu ornare ex condimentum non. Sed id justo sit amet urna laoreet cursus tempor nec arcu. Integer id arcu quis sem pretium commodo. Ut consectetur lectus nec ipsum euismod, a dignissim urna ultricies.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Team() {
  return (
      <section
          id="team"
          className="relative overflow-hidden py-20"
      >

        <Container className="relative">
          <div className="bg-white">
            <div className="mx-auto">
              <div className="space-y-12">
                <div className="mx-auto space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center">
                  <h2 className="font-display text-3xl tracking-tight text-croke sm:text-4xl">Our Team</h2>
                  <p className="text-xl text-slate-700 mx-auto">
                    We devote ourselves to client success. This starts by bringing common sense - along with uncommon creativity and kindness - to every project.
                  </p>
                </div>
                <ul
                    role="list"
                    className="flex flex-col items-center space-y-8 md:grid md:justify-around md:grid-cols-5 md:gap-x-8"
                >
                  {people.map((person) => (
                      <li key={person.name}>
                        <div className="space-y-4">
                          <div className="aspect-w-2 aspect-h-3">
                            <img className="rounded-md w-52 h-72 top-1 object-cover shadow-lg" src={person.imageUrl.src} alt={person.name} />
                          </div>

                          <div className="space-y-2">
                            <div className="space-y-1">
                              <Disclosure as="div" key={person.name} className="pt-6">
                                {({ open }) => (
                                    <>
                                      <dt className="text-lg">
                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-croke-300">
                                          <div className="space-y-1">
                                            <h3 className="text-slate-700 text-base">{person.name}</h3>
                                            <p className="font-display text-sm tracking-tight text-croke">{person.role}</p>
                                          </div>
                                          <span className="ml-6 flex h-7">
                                            <ChevronDownIcon
                                                className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                aria-hidden="true"
                                            />
                                          </span>
                                        </Disclosure.Button>
                                      </dt>
                                      <Disclosure.Panel as="div" className="mt-2 pr-2">
                                        <p className="text-base text-left text-slate-700">{person.bio}</p>
                                      </Disclosure.Panel>
                                    </>
                                )}
                              </Disclosure>
                            </div>
                            <ul role="list" className="flex space-x-5">
                              <li>
                                <a href={person.linkedinUrl} className="text-croke hover:text-croke-300">
                                  <span className="sr-only">LinkedIn</span>
                                  <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                        clipRule="evenodd"
                                    />
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a href={person.twitterUrl} className="text-croke hover:text-croke-300">
                                  <span className="sr-only">Twitter</span>
                                  <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                  </svg>
                                </a>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>


  )
}

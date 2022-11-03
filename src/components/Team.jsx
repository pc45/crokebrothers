import ryan from '@/images/rc.jpg'
import {Container} from "@/components/Container";


const people = [
  {
    name: 'Ryan Croke',
    role: 'CEO',
    imageUrl: ryan,
    bio: 'Ryan Croke served as Chief of Staff in the Illinois Department of\n' +
        'Human Services, the State government\'s largest agency, during Governor JB Pritzker\'s first term. Prior to that, he was Executive Director of the statewide association of Centers for Independent Living in Illinois, and the Associate Chancellor for Public Affairs at the University of Illinois Springfield. He spent almost a decade working for Lieutenant Governor and the Governor Pat Quinn, eventually as Chief of Staff to the Governor. During that time he was central to the development of Illinois\' broadband infrastructure investments, handled public safety, rural affairs, and executive appointments. He volunteers as a board member on the District 186 Public Schools Foundation and as President of the Mid-Illinois Medical District Commission. In 2019 the German Marshall Fund of the United States selected him as a Marshall Memorial Fellow. Ryan earned undergrad and masters degrees in communication at the University of Illinois at Urbana-Champaign. He and his wife Brook live in Springfield with their three young children.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Simon Edelman',
    role: 'Senior Front-end Developer',
    imageUrl: ryan,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id porta nisi, eget efficitur nibh. Etiam sit amet nibh vitae arcu pretium feugiat ut at tellus. Morbi turpis ante, dictum eget venenatis vitae, pulvinar sit amet ex. Nulla eu neque tempus, volutpat lorem id, placerat lorem. In interdum, nisi quis euismod mattis, neque erat viverra arcu, at volutpat arcu orci ut est. Maecenas scelerisque urna ex, quis imperdiet est imperdiet et. Pellentesque commodo id ante eget gravida. Suspendisse elementum gravida sem, a accumsan neque suscipit nec. Praesent non malesuada risus, in fermentum lectus. Vestibulum id dolor quis purus ultricies iaculis venenatis ac lacus. Praesent faucibus tempor ultrices. Sed lorem arcu, viverra a fringilla ut, ornare vitae erat. Nunc facilisis nibh erat, eu ornare ex condimentum non. Sed id justo sit amet urna laoreet cursus tempor nec arcu. Integer id arcu quis sem pretium commodo. Ut consectetur lectus nec ipsum euismod, a dignissim urna ultricies.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Juan Carlos Denoso',
    role: 'Senior Research Scientist',
    imageUrl: ryan,
    bio: 'Juan Carlos Donoso is a senior research scientist in the Associated Press-NORC Center for Public Affairs Research. Donoso is a political scientist whose research focuses on public opinion and political attitudes. He has significant experience managing complex multi-mode surveys in the United States, Europe, and Latin America.\n' +
        '\n' +
        'Donoso has designed, conducted, and managed surveys on a variety of topics, including attitudes towards democracy, rule of law, the role of religion in public life, and issues related to public health, such as child development and housing conditions and risk factors for suicide among veterans and military service members.\n' +
        '\n' +
        'Donoso joins NORC from the Institute for Social Research at the University of Michigan, where he worked as a senior survey researcher in the Project Design and Management Group. Previously, he started a survey research firm in his native country of Ecuador, where he partnered with local and international organizations such as the Constitutional Court of Ecuador and USAID to design and execute research projects on democracy development and rule of law.\n' +
        '\n' +
        'Donoso has published scholarly work in peer reviewed journals as well as chapters in edited volumes and reports for public release. He is an active member of AAPOR, ESRA and WAPOR and frequently presents at survey research conferences.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Pete Croke',
    role: 'Full Stack Developer',
    imageUrl: ryan,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id porta nisi, eget efficitur nibh. Etiam sit amet nibh vitae arcu pretium feugiat ut at tellus. Morbi turpis ante, dictum eget venenatis vitae, pulvinar sit amet ex. Nulla eu neque tempus, volutpat lorem id, placerat lorem. In interdum, nisi quis euismod mattis, neque erat viverra arcu, at volutpat arcu orci ut est. Maecenas scelerisque urna ex, quis imperdiet est imperdiet et. Pellentesque commodo id ante eget gravida. Suspendisse elementum gravida sem, a accumsan neque suscipit nec. Praesent non malesuada risus, in fermentum lectus. Vestibulum id dolor quis purus ultricies iaculis venenatis ac lacus. Praesent faucibus tempor ultrices. Sed lorem arcu, viverra a fringilla ut, ornare vitae erat. Nunc facilisis nibh erat, eu ornare ex condimentum non. Sed id justo sit amet urna laoreet cursus tempor nec arcu. Integer id arcu quis sem pretium commodo. Ut consectetur lectus nec ipsum euismod, a dignissim urna ultricies.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

export default function Team() {
  return (
      <section
          id="team"
          className="relative overflow-hidden py-20"
      >

        <Container className="relative">
          <div className="mx-auto max-w-7xl text-center">
            <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="font-display text-3xl tracking-tight text-croke sm:text-4xl">Our Team</h2>
              <p className="text-xl text-gray-500">
                Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum
                vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                  role="list"
                  className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {people.map((person) => (
                    <li key={person.name}>
                      <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                           <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl.src} alt="" />
                        </div>
                        <div className="space-y-1 text-lg font-medium leading-6">
                          <h3 className="text-slate-700">{person.name}</h3>
                          <p className="font-display tracking-tight text-croke">{person.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-slate-700">{person.bio}</p>
                        </div>

                        <ul role="list" className="flex space-x-5">
                          <li>
                            <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Twitter</span>
                              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
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
                        </ul>
                      </div>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
          </div>
        </Container>
      </section>
  )
}

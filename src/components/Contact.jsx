import { Container } from "@/components/Container";

export default function Contact() {
  return (
      <section
          id="contact"
          aria-labelledby="contact-title"
          className="bg-croke-400 pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2
                id="portfolio-title"
                className="font-display text-3xl tracking-tight text-white sm:text-4xl"
            >
              Let's Do Something Great Together!
            </h2>

            <form className="space-y-8 divide-y divide-white">
              <div className="space-y-8 divide-y divide-white">
                <div className="pt-8">
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-white">
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-white">
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="email" className="block text-sm font-medium text-white">
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="phone" className="block text-sm font-medium text-white">
                        Phone
                      </label>
                      <div className="mt-1">
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            autoComplete="phone"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label htmlFor="about" className="block text-sm font-medium text-white">
                        How can we help?
                      </label>
                      <div className="mt-1">
                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="let us know what you are looking for"
                            defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
          <div className="flex justify-end">

            <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-croke-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-croke-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Send
            </button>
          </div>
        </div>
            </form>
          </div>
        </Container>
      </section>
  )
}

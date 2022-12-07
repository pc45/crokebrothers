import React, { useState } from 'react'
import { Container } from '@/components/Container'
import { useForm, useController } from 'react-hook-form'

const services = [
  { id: 2, name: 'Policy Research' },
  { id: 3, name: 'PR' },
  { id: 4, name: 'Video Production' },
  { id: 5, name: 'Web Development' },
  { id: 6, name: 'Polling Strategic Planning' },
  { id: 7, name: 'Crisis Advice' },
  { id: 8, name: 'Something else' },
]

const Checkboxes = ({ services, control, name }) => {
  const { field } = useController({
    control,
    name,
  })
  const [value, setValue] = React.useState(field.value || [])

  return (
    <>
      {services.map((service, index) => (
        <div key={service.id} className="text-left">
          <input
            onChange={(e) => {
              const valueCopy = [...value]

              // update checkbox value
              valueCopy[index] = e.target.checked ? e.target.value : null

              // send data to react hook form
              field.onChange(valueCopy)

              // update local state
              setValue(valueCopy)
            }}
            type="checkbox"
            checked={value.includes(service.name)}
            value={service.name}
            className="text-croke-300 focus:ring-croke-300"
          />
          <label htmlFor="serviceInfo" className="text-white" className="ml-2">
            {service.name}
          </label>
        </div>
      ))}
    </>
  )
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const [submitted, setSubmitted] = useState()

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-croke-400 py-20"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Let's Collaborate! <br />
          </h2>

          <p className="mt-6 font-display text-xl tracking-tight text-white sm:text-xl">
            You can also{' '}
            <a
              href="mailto:team@crokeandco.com"
              className="text-croke-300 hover:text-croke-600"
            >
              email us
            </a>{' '}
            or{' '}
            <a
              href="tel:636-336-2428"
              className="text-croke-300 hover:text-croke-600"
            >
              call
            </a>
            , if you prefer
          </p>

          {submitted ? (
            <div className="mt-8 font-bold text-croke-50">
              Thanks for reaching out! We will be in touch with you very soon.
            </div>
          ) : (
            <form
              className="space-y-8 divide-y divide-white"
              onSubmit={handleSubmit((data) => {
                fetch('api/contact', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                }).then((res) => {
                  if (res.status === 200) {
                    setSubmitted(data)
                  }
                })
              })}
            >
              <div className="space-y-8 divide-y divide-white">
                <div className="pt-8">
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="firstname"
                        className="block text-sm font-medium text-white"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          {...register('firstname', {
                            required: 'First name is required',
                          })}
                          id="firstname"
                          className="block w-full rounded-md border-croke shadow-sm focus:border-croke-200 focus:ring-croke-200 sm:text-sm"
                        />
                        <p className="mt-2 rounded-md text-left text-xs font-bold font-medium text-croke-300">
                          {' '}
                          {errors.firstname?.message}
                        </p>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="lastname"
                        className="block text-sm font-medium text-white"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          {...register('lastname', {
                            required: 'Last Name is required',
                          })}
                          id="lastname"
                          className="block w-full rounded-md border-croke shadow-sm focus:border-croke-200 focus:ring-croke-200 sm:text-sm"
                        />
                        <p className="mt-2 rounded-md text-left text-xs font-bold font-medium text-croke-300">
                          {errors.lastname?.message}
                        </p>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          {...register('email', {
                            required: 'Email is required',
                          })}
                          type="email"
                          className="block w-full rounded-md border-croke shadow-sm focus:border-croke-200 focus:ring-croke-200 sm:text-sm"
                        />
                        <p className="mt-2 rounded-md text-left text-xs font-bold font-medium text-croke-300">
                          {errors.email?.message}
                        </p>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-white"
                      >
                        Phone
                      </label>
                      <div className="mt-1">
                        <input
                          id="phone"
                          {...register('phone')}
                          type="text"
                          className="block w-full rounded-md border-croke shadow-sm focus:border-croke-200 focus:ring-croke-200 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-white"
                      >
                        I'm interested in...
                      </label>
                      <div className="mt-1 mt-1 flex justify-center">
                        <fieldset>
                          <div className="mt-4 grid grid-cols-2 gap-2 text-white md:grid-cols-4 ">
                            <Checkboxes
                              services={services}
                              control={control}
                              name="serviceInfo"
                            />
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white"
                      >
                        Any questions or quick background you’d like to share?
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          {...register('message', {
                            required: 'A message is required',
                          })}
                          rows={5}
                          className="block w-full rounded-md border-croke shadow-sm focus:border-croke-200 focus:ring-croke-200 sm:text-sm"
                        />
                        <p className="mt-2 rounded-md text-left text-xs font-bold font-medium text-croke-300">
                          {errors.message?.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-croke-300 py-2 px-4 font-display text-sm font-medium tracking-wider text-white shadow-sm hover:bg-croke-600 focus:outline-none focus:ring-2 focus:ring-croke focus:ring-offset-2"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}

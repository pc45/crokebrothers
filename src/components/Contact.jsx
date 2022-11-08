import React, { useState } from 'react'
import { Container } from "@/components/Container";
import {Listbox, Transition} from "@headlessui/react";

const services = [
  "Strategic Communication",
  "Video Production",
  "Web Development",
  "Polling",
  "Something else...",
];

export default function Contact() {

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [isOpen, setIsOpen] = useState(false);
  const [selectedServices, setselectedServices] = useState([]);

  function isSelected(value) {
    return selectedServices.find((el) => el === value) ? true : false;
  }

  function handleSelect(value) {
    if (!isSelected(value)) {
      const selectedServicesUpdated = [
        ...selectedServices,
        services.find((el) => el === value)
      ];
      setselectedServices(selectedServicesUpdated);
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  }

  function handleDeselect(value) {
    const selectedServicesUpdated = selectedServices.filter((el) => el !== value);
    setselectedServices(selectedServicesUpdated);
    setIsOpen(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      firstname,
      lastname,
      email,
      phone,
      message,
      selectedServices,
    }


    return false

    fetch('api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log(data)
      console.log(res.status)
      if (res.status === 200) {
        setSubmitted(true)
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setselectedServices([])
      }
    })
  }

  return (
      <section
          id="contact"
          aria-labelledby="contact-title"
          className="bg-croke-400 py-20"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-lg font-semibold text-croke-100">Get Started</h2>
            <p className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Let's Collaborate!
            </p>
            <form className="space-y-8 divide-y divide-white" noValidate>
              <div className="space-y-8 divide-y divide-white">
                <div className="pt-8">
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="firstname" className="block text-sm font-medium text-white">
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                            type="text"
                            required
                            name="firstname"
                            id="firstname"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-croke-200 focus:ring-croke-200 sm:text-sm"
                            onChange={(e)=>{setFirstName(e.target.value)}}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="lastname" className="block text-sm font-medium text-white">
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                            type="text"
                            name="lastname"
                            required
                            id="lastname"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-croke-200 focus:ring-croke-200 sm:text-sm"
                            onChange={(e)=>{setLastName(e.target.value)}}
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
                            required
                            type="email"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-croke-200 focus:ring-croke-200 sm:text-sm"
                            onChange={(e)=>{setEmail(e.target.value)}}
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
                            required
                            type="text"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-croke-200 focus:ring-croke-200 sm:text-sm"
                            onChange={(e)=>{setPhone(e.target.value)}}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label htmlFor="about" className="block text-sm font-medium text-white">
                        I'm interested in...
                      </label>
                      <div className="mt-1">
                        <Listbox
                            as="div"
                            className="space-y-1"
                            value={selectedServices}
                            onChange={(value) => handleSelect(value)}
                            open={isOpen}
                            required
                        >
                          {() => (
                              <>
                                <div className="relative">
                    <span className="inline-block w-full rounded-md shadow-sm">
                  <Listbox.Button
                      className="cursor-default relative w-full rounded-md border border-gray-300 bg-white border-gray-300 shadow-sm focus:border-croke-200 focus:ring-croke-200 pl-3 pr-10 py-2 text-left transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      onClick={() => setIsOpen(!isOpen)}
                      open={isOpen}
                  >
                    <span className="block truncate text-xs py-2">
                      {selectedServices.length < 1
                          ? "Select any of the following options"
                          : `You selected: ${selectedServices}`}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                          className="h-5 w-5 text-croke-300"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                      >
                        <path
                            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                </span>

                                  <Transition
                                      unmount={false}
                                      show={isOpen}
                                      leave="transition ease-in duration-100"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                      className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                                  >
                                    <Listbox.Options
                                        static
                                        className="rounded-md py-1 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                                    >
                                      {services.map((service) => {
                                        const selected = isSelected(service);
                                        return (
                                            <Listbox.Option key={service} value={service}>
                                              {({ active }) => (
                                                  <div
                                                      className={`${
                                                          active
                                                              ? "text-white bg-croke"
                                                              : "text-slate-700"
                                                      } cursor-default select-none relative py-2 pl-8 pr-4`}
                                                  >
                                <span
                                    className={`${
                                        selected ? "font-semibold" : "font-normal"
                                    } block truncate`}
                                >
                                  {service}
                                </span>
                                                    {selected && (
                                                        <span
                                                            className={`${
                                                                active ? "text-white" : "text-croke-400"
                                                            } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                                        >
                            <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                              <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                              />
                            </svg>
                          </span>
                                                    )}
                                                  </div>
                                              )}
                                            </Listbox.Option>
                                        );
                                      })}
                                    </Listbox.Options>
                                  </Transition>
                                </div>
                              </>
                          )}
                        </Listbox>
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label htmlFor="about" className="block text-sm font-medium text-white">
                        Any questions or quick background you’d like to share?
                      </label>
                      <div className="mt-1">
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-croke-200 focus:ring-croke-200 sm:text-sm"
                            placeholder=""
                            onChange={(e)=>{setMessage(e.target.value)}}
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
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-croke-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-croke-600 focus:outline-none focus:ring-2 focus:ring-croke focus:ring-offset-2"
                onClick={(e)=>{handleSubmit(e)}}
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

import Link from 'next/link'
import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer>
      <Container className="flex flex-col space-y-8 md:grid md:grid-cols-3 md:gap-x-3 md:space-y-0 justify-center items-center py-8 ">
        <div>
          <p className="text-sm text-croke text-center">
            Copyright &copy; {new Date().getFullYear()} Croke &amp; Company. All rights
            reserved.
          </p>
        </div>

        <nav className="text-sm" aria-label="quick links">
            <ul className="flex justify-center space-x-6">
              <li>
                <Link href="#services">
                  <a className="rounded-lg px-2 py-1 text-croke hover:bg-croke-200 hover:text-slate-900">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a className="rounded-lg px-2 py-1 text-croke hover:bg-croke-200 hover:text-slate-900">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a className="rounded-lg px-2 py-1 text-croke hover:bg-croke-200 hover:text-slate-900">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

        <div className=" text-center border-t border-slate-400/10 sm:flex-row-reverse sm:justify-between">
          <div className="flex justify-center space-x-6">
            <Link href="#">
              <a className="group">
                <span className="sr-only">Croke&amp;Co on Twitter</span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-croke group-hover:fill-croke-200"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
                </svg>
              </a>
            </Link>
            <Link href="#">
              <a className="group">
                <span className="sr-only">Croke&amp;Co on Instagram</span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-croke group-hover:fill-croke-200"
                >
                  <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z" />
                  <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z" />
                </svg>
              </a>
            </Link>
            <Link href="#">
              <a className="group">
                <span className="sr-only">Croke&amp;Co on LinkedIn</span>
                <svg
                    aria-hidden="true"
                    className="h-6 w-6 fill-croke group-hover:fill-croke-200"
                >
                  <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                </svg>
              </a>
            </Link>
          </div>
        </div>

      </Container>
    </footer>
  )
}

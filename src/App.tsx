import "./App.css";
// import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className='bg-white'>
      <nav className='p-6 lg:px-8 flex items-center justify-between'>
        <a className='text-xl md:text-2xl font-bold text-green-500' href='/'>
          whatnot
        </a>

        <a className='text-sm md:text-base' href='/privacy'>
          Privacy Policy
        </a>
      </nav>

      <div className='relative isolate px-6 lg:px-8'>
        <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tl from-[#22c55e] to-[#22c55e]/60 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className='py-20 lg:py-32'>
          <div className='mx-auto text-center max-w-md md:max-w-2xl'>
            <h1 className='text-4xl font-semibold tracking-tight text-gray-800 sm:text-6xl'>
              What not can your <span className='text-green-500'>WhatsApp</span>{" "}
              do?
            </h1>
            <p className='mt-6 m-auto text-sm md:text-base md:leading-7 sm:max-w-xl max-w-sm leading-6 text-gray-600'>
              Effortlessly sync WhatsApp with Google Suite: Transform WhatsApp
              messages into notes on Google Docs, schedule events through
              WhatsApp on Google Calendar, and securely save media on Google
              Drive.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='#'
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Get started
              </a>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

import React from 'react'

const LandingNavbar = () => {
  return (
    <div>
        <nav className='bg-neutral-50 h-16  flex flex-row justify-between'>
        <div href="" class=" ">
          <h1 class="mt-4 ml-8 flex flex-col text-xl text-black font-semibold  ">
            Paysal-earn
          </h1>
        </div>
        <div class="relative inline-block ml-96 text-left mt-4 mr-8 flex flex-col">
              <div className="flex w-full text-black justify-around gap-x-1.5 rounded-lg px-10 py-2 text-base font-semibold ring-2 ring-inset ring-fuchsia-600">
                <a href='href="/ListDetails"'>Get started</a>
              </div>
            </div>
        </nav>
    </div>
  )
}

export default LandingNavbar
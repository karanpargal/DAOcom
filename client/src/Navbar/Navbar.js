import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-neutral-50 h-16 flex flex-row">
        <div href="" class=" ">
          <h1 class="mt-4 ml-1 text-xl text-black font-semibold  ">
            Paysal-earn
          </h1>
        </div>
        <div className="ml-96">
        <ul class="flex flex-col mt-4 border gap-7 rounded-lg  md:flex-row  md:text-sm md:font-medium md:border-0 ">
          <li>
            <div class="relative inline-block text-left">
              <div className="flex w-full text-black  justify-around gap-x-1 rounded-lg px-8 py-2 text-base font-semibold  ring-2 ring-inset ring-fuchsia-600">
                <button> All Bounties</button>
              </div>
            </div>
          </li>

          <li>
            <div class="relative inline-block text-left">
              <div className="flex w-full text-black  justify-around gap-x-1 rounded-lg px-10 py-2 text-base font-semibold ring-2 ring-inset ring-fuchsia-600">
                <button> All Opportunities</button>
              </div>
            </div>
          </li>
          <li>
            <div class="relative inline-block text-left">
              <div className="flex w-full  justify-around gap-x-1 rounded-lg px-10 py-2 text-base font-semibold text-black ring-2 ring-inset ring-fuchsia-600">
                <button> All Grants</button>
              </div>
            </div>
          </li>
        </ul>
        </div>
       <div class="relative inline-block text-left mt-4 flex flex-col ml-72">
              <div className="flex w-full text-black  justify-around gap-x-1.5 rounded-lg px-10 py-2 text-base font-semibold ring-2 ring-inset ring-fuchsia-600">
                <button>Get started</button>
              </div>
            </div>
      </nav>
    </div>
  );
};

export default Navbar;

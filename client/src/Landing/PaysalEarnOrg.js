import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import BountyDetails from "./BountyDetails";
import GrantsDetails from "../GrantCards/GrantsDetails";

const PaysalEarnOrg = () => {
  return (
    <div>
      <div>
        <nav className=" fixed bg-neutral-50 h-16 flex flex-row border-b-2 w-[100%]">
          <div href="" class=" ">
            <h1 class="mt-4 ml-4 text-xl text-black font-semibold  ">
              Paysal-earn
            </h1>
          </div>
          
          
        </nav>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div>
            <aside
              id="sidebar"
              class="fixed left-0 z-40 w-64 h-fit mt-16  transition-transform-translate-x-full bg-neutral-50 border-r border-gray-200 sm:translate-x-0 "
              aria-label="Sidebar"
            >
              <div class="h-full px-3 pb-4 overflow-y-auto bg-neutral-50 flex flex-col divide-y ">
                <ul class="space-y-2 font-medium flex flex-col ">
                  <h1 className="text-left mt-4 text-gray-600">Workspace</h1>
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-black rounded-lg "
                    >
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-black transition duration-75 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span class="ml-3">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-black rounded-lg "
                    >
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-black transition duration-75 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span class="ml-3">Contributors</span>
                    </a>
                  </li>
                </ul>
                <ul class="space-y-2 font-medium mt-4 flex flex-col">
                  <h1 className="text-left text-gray-600">Your listings</h1>
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-black rounded-lg "
                    >
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-black transition duration-75 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span class="ml-3">Bounties</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-black rounded-lg "
                    >
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-black  transition duration-75 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span class="ml-3">Grants</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-black rounded-lg "
                    >
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-black  transition duration-75 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span class="ml-3 ">Jobs</span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>

        <div className="flex flex-row ml-80 mt-40">
          <div className="bg-neutral-50">
            <div className=" shadow-xl  rounded-lg  flex flex-col border-black border w-80 text-black">
              <div className="text-center">
                <div className="flex justify-center pt-8">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 122.88"
                    className="h-10 w-10 text-gray-500"
                  >
                    <title>add</title>
                    <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0ZM88.6,56.82v9.24a4,4,0,0,1-4,4H70V84.62a4,4,0,0,1-4,4H56.82a4,4,0,0,1-4-4V70H38.26a4,4,0,0,1-4-4V56.82a4,4,0,0,1,4-4H52.84V38.26a4,4,0,0,1,4-4h9.24a4,4,0,0,1,4,4V52.84H84.62a4,4,0,0,1,4,4Zm8.83-31.37a50.92,50.92,0,1,0,14.9,36,50.78,50.78,0,0,0-14.9-36Z" />
                  </svg>
                  <a
                    className="pt-1 pl-4 font-bold font-ubuntu ml-1 text-black text-2xl text-center pb-10"
                    href="/AddBounty"
                  >
                    Add Bounty
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-50 ml-8">
            <div className=" shadow-xl  rounded-lg  flex flex-col border-black border w-80 text-black">
              <div className="text-center">
                <div className="flex justify-center pt-8">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 122.88"
                    className="h-10 w-10 text-gray-500"
                  >
                    <title>add</title>
                    <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0ZM88.6,56.82v9.24a4,4,0,0,1-4,4H70V84.62a4,4,0,0,1-4,4H56.82a4,4,0,0,1-4-4V70H38.26a4,4,0,0,1-4-4V56.82a4,4,0,0,1,4-4H52.84V38.26a4,4,0,0,1,4-4h9.24a4,4,0,0,1,4,4V52.84H84.62a4,4,0,0,1,4,4Zm8.83-31.37a50.92,50.92,0,1,0,14.9,36,50.78,50.78,0,0,0-14.9-36Z" />
                  </svg>
                  <a
                    className="pt-1 pl-4 font-bold font-ubuntu ml-1 text-black text-2xl text-center pb-10"
                    href="/AddJob"
                  >
                    Add Job
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-50 ml-8">
            <div className=" shadow-xl  rounded-lg  flex flex-col border-black border w-80 text-black">
              <div className="text-center">
                <div className="flex justify-center pt-8">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 122.88"
                    className="h-10 w-10 text-gray-500"
                  >
                    <title>add</title>
                    <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0ZM88.6,56.82v9.24a4,4,0,0,1-4,4H70V84.62a4,4,0,0,1-4,4H56.82a4,4,0,0,1-4-4V70H38.26a4,4,0,0,1-4-4V56.82a4,4,0,0,1,4-4H52.84V38.26a4,4,0,0,1,4-4h9.24a4,4,0,0,1,4,4V52.84H84.62a4,4,0,0,1,4,4Zm8.83-31.37a50.92,50.92,0,1,0,14.9,36,50.78,50.78,0,0,0-14.9-36Z" />
                  </svg>
                  <a
                    className="pt-1 pl-4 font-bold font-ubuntu ml-1 text-black text-2xl text-center pb-10"
                    href="/AddGrant"
                  >
                    Add Grant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaysalEarnOrg;

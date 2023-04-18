import React from "react";
import { useEffect, useState } from "react";
import ContributorsCard from "./ContributorsCard";

const Employess = (props) => {
  const [contributorData, setContributorDataData] = useState([]);

  const fetchEmployees = async () => {
    setContributorDataData([]);
    const response = await fetch("https://daocom.onrender.com/employees", {
      method: "GET",
    });
    const employee = await response.json();
    setContributorDataData(employee);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="w-full pb-10">
      <div>
        <nav className=" fixed bg-neutral-50 h-16 flex flex-row border-b-2 w-[100%]">
          <div href="" class=" ">
            <h1 class="mt-4 ml-4 text-xl text-black font-semibold  ">
              Paysal-earn
            </h1>
          </div>
        </nav>
      </div>
      <div className="flex flex-row ">
      <div className="flex flex-col">
          <div>
            <aside
              id="sidebar"
              class="relative left-0 z-40 w-64 h-screen mt-16  transition-transform-translate-x-full bg-neutral-50 border-r border-gray-200 sm:translate-x-0 "
              aria-label="Sidebar"
            >
              <div class="h-full px-3 pb-4 overflow-y-auto bg-neutral-50 flex flex-col divide-y ">
                <ul class="space-y-2 font-medium flex flex-col ">
                  <h1 className="text-left mt-4 text-gray-600">Workspace</h1>
                  <li>
                    <a
                      href="/dashboard"
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
        <div className="text-black ml-10 mt-12 w-[100%]">
          <div className="flex justify-between place-items-center place-self-center place-content-center">
            <div className="text-3xl font-bold mb-8 pt-12">
              Your Contributors
            </div>
            
          </div>
          <div class="grid grid-cols-3 gap-y-4 mt-10">
            {contributorData.map((contributor) => (
              <ContributorsCard
              contributor={contributor}
              />
            ))}
          </div>
        </div>
      </div>
      <p class="text-center mt-10 pb-10 text-gray-500 text-xs">
        &copy;2023 PaySal Corp. All rights reserved.
      </p>
    </div>
  );
};

export default Employess;
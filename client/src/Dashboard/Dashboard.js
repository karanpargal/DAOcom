import React from "react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [orgData, setOrgData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://daocom.onrender.com/orgs/",{method: "GET",});
      for(let i=0;i<res.length;i++){
        if(res[i].walletAddress==="Paysal"){
          setOrgData(res[i]);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div class=" ">
        <nav class="px-2 sm:px-4 p-4 mb-2">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="dashboard" class="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span class="self-center text-xl  text-white font-semibold whitespace-nowrap ">
                PaySal
              </span>
            </a>
          </div>
        </nav>
      </div>

      <div className="flex flex-row ">
        <aside
          id="default-sidebar"
          class=" relative top-0 left-0 z-40 w-56 transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto">
            <ul class="space-y-2 font-medium">
              <li className="bg-white rounded-lg">
                <a
                  href="dashboard"
                  class="flex items-center p-2 text-black rounded-lg "
                >
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
                  href="Employees"
                  class="group flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-white hover:text-black"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-black group-hover:text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Employees</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div id="Dashboard" className="flex flex-col text-white p-6 pt-0 ">
          <h1 className="text-3xl font-bold mb-8 pt-12">
            Organization Details
          </h1>
          <div class="block bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 divide-y-2 max-w-md p-6 bg-white rounded-lg shadow hover:bg-gray-100">
            <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              {orgData.name}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {orgData.email}
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {orgData.industry}
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {orgData.walletAddress}
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-8 pt-12">Departments</h1>
          </div>

          <div className="flex flex-row  m-auto space-x-10">
            <div>
              <a
                href="#"
                class="block bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 divide-y-2 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  IT
                </h5>
                <p class="font-normal text-gray-700 border-black">
                Transforming business through innovative technology solutions. Driving efficiency, agility, and growth for a connected world.
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <strong>Employees:</strong> 2
                </p>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="block bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 divide-y-2 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Marketing
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 border-black">
                Creating Connections, Building Brands. Innovative marketing solutions that engage, inspire, and drive growth. Your partner in strategic marketing success.
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <strong>Employees:</strong> 1
                </p>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="block bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 divide-y-2 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Operations
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 border-black">
                Streamlining Processes, Driving Performance. Efficient operations for sustainable growth. Your partner in optimizing performance, reducing costs, and enhancing customer experience.
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <strong>Employees:</strong> 0
                </p>
              </a>
            </div>

            <div>
              <div class="block bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 divide-y-2 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Business
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 border-black">
                Innovating for Success, Driving Growth. Strategic solutions for sustainable business growth. Your partner in navigating change, seizing opportunities, and achieving success.
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <strong>Employees:</strong> 1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center mt-10 pb-20 text-gray-500 text-xs">
        &copy;2023 PaySal Corp. All rights reserved.
      </p>
    </div>
  );
};

export default Dashboard;
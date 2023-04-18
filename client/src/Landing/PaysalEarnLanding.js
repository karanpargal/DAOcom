import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import BountyDetails from "./BountyDetails";
import GrantsDetails from "../GrantCards/GrantsDetails";
import { useState, useEffect } from "react";
import JobDetails from "./JobDetails";
import Logo from "../Assets/Logo.png"

const PaysalEarnLanding = () => {
  const [bounty, setBounty] = useState([]);
  const [grants, setGrants] = useState([]);
  const [jobs, setJobs] = useState([]);

  const fetchBounty = async () => {
    setBounty([]);
    const response = await fetch("https://daocom.onrender.com/bounties", {
      method: "GET",
    });
    const bounty = await response.json();
    setBounty(bounty);
  };

  const fetchGrant = async () => {
    setGrants([]);
    const response = await fetch("https://daocom.onrender.com/grants", {
      method: "GET",
    });
    const grants = await response.json();
    setGrants(grants);
  };

  const fetchJobs = async () => {
    setJobs([]);
    const response = await fetch("https://daocom.onrender.com/jobs", {
      method: "GET",
    });
    const jobs = await response.json();
    setJobs(jobs);
  };

  useEffect(() => {
    fetchBounty();
    fetchGrant();
    fetchJobs();
  }, []);

  return (
    <div className="">
      <nav className=" fixed bg-neutral-50 w-[100%] h-16 flex flex-row border-b-2">
      <div href="" class=" ">
          <img class="w-40 h-18 mt-2  "  src={Logo}>
           
          </img>
        </div>
      </nav>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <aside
            id="sidebar"
            class="fixed left-0 z-40 w-64 h-fit mt-16  transition-transform-translate-x-full bg-neutral-50 border-r border-gray-200 sm:translate-x-0 "
            aria-label="Sidebar"
          >
            <div class="h-screen px-3 pb-4 overflow-y-auto bg-neutral-50 flex flex-col divide-y ">
              <ul class="space-y-2 font-medium flex flex-col ">
                <h1 className="text-left mt-4 text-gray-600">
                  All opportunities
                </h1>
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
                      class="w-6 h-6 text-black transition duration-75 "
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
                      class="w-6 h-6 text-black transition duration-75 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span class="ml-3">Jobs</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="flex flex-col ml-72 mt-10  ">
          <BountyDetails bounty={bounty} />
          <div className="flex flex-col mt-10">
            <GrantsDetails grants={grants} />
          </div>
          <div className="flex flex-col mt-10">
            <JobDetails jobs={jobs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaysalEarnLanding;

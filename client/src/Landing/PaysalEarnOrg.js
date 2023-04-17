import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import BountyDetails from "./BountyDetails";
import GrantsDetails from "../GrantCards/GrantsDetails";

const PaysalEarnOrg = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Sidebar />
        </div>

        <div className="flex flex-row ml-80 mt-10">
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
                  <a className="pt-1 pl-4 font-bold font-ubuntu ml-1 text-black text-2xl text-center pb-10">
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
                  <a className="pt-1 pl-4 font-bold font-ubuntu ml-1 text-black text-2xl text-center pb-10">
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
                  <a className="pt-1 pl-4 font-bold font-ubuntu ml-1 text-black text-2xl text-center pb-10">
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

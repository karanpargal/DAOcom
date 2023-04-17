import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import BountyDetails from "./BountyDetails";
import GrantsDetails from "../GrantCards/GrantsDetails";

const PaysalEarnLanding = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Sidebar />
        </div>

        <div className="flex flex-col ml-72 mt-10  ">
          <BountyDetails />
          <div className="flex flex-col mt-10">
            <GrantsDetails />
          </div>
       
        </div>

        
      </div>
    </div>
  );
};

export default PaysalEarnLanding;

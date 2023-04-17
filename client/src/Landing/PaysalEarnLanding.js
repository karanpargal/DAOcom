import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import BountyDetails from "./BountyDetails";
import GrantsDetails from "../GrantCards/GrantsDetails";
import { useState, useEffect } from "react";

const PaysalEarnLanding = () => {
  const [bounty, setBounty] = useState([]);

  const fetchBounty = async () => {
    const response = await fetch("https://daocom.onrender.com/bounties", {
      method: "GET",
    });
    const bounty = await response.json();
    setBounty(bounty);
  };

  useEffect(() => {
    fetchBounty();
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Sidebar />
        </div>

        <div className="flex flex-col ml-72 mt-10  ">
          <BountyDetails bounty={bounty} />
          <div className="flex flex-col mt-10">
            <GrantsDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaysalEarnLanding;

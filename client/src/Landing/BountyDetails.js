import React from "react";
import BountyCards from "./BountyCards";

const BountyDetails = () => {
  const BountyDetailsData = [
    { Heading: "hello", Description: "lorm ipsum random lrem ipsum recim focium", Prize: "20K", Time: "9 days" },
    { Heading: "hello", Description: "lorm ipsum random lrem ipsum recim focium", Prize: "20K", Time: "9 days" },
    { Heading: "hello", Description: "lorm ipsum random lrem ipsum recim focium ", Prize: "20K", Time: "9 days" },
  ];
  console.log(BountyDetailsData);
  return (
    <div className="mt-16 font-display" id="BountyDetails">
      <p className=" text-2xl text-black font-bold  ">Bounty Details </p>
      <div className="flex flex-row justify-center gap-10 mt-4">
        <BountyCards BountyCards={BountyDetailsData[0]} />
        <BountyCards BountyCards={BountyDetailsData[1]} />
        <BountyCards BountyCards={BountyDetailsData[2]} />
      </div>
    </div>
  );
};

export default BountyDetails;

import React from "react";
import BountyCards from "./BountyCards";

const BountyDetails = (props) => {
  const BountyDetailsData = props.bounty;
  
  return (
    <div className="mt-16 font-display" id="BountyDetails">
      <p className=" text-2xl text-black font-bold  ">Bounty Details </p>
      <div className="flex flex-row justify-center gap-10 mt-8">
        {BountyDetailsData.map((BountyDetailsData) => (
          <BountyCards BountyCards={BountyDetailsData} />
        ))}
      </div>
    </div>
  );
};

export default BountyDetails;

import React from "react";
import BountyCards from "./BountyCards";

const BountyDetails = () => {
  const BountyDetailsData = [
    { Heading: "hello" },
    { Heading: "hello" },
    { Heading: "hello" },
  ];
  console.log(BountyDetailsData);
  return (
    <div className="mt-10 font-display" id="BountyDetails">
    <p className=" text-2xl text-black font-bold ml-48 ">Bounty Details </p>
    <div className="flex flex-row justify-center gap-10 p-20">
        <BountyCards BountyCards={BountyDetailsData[0]} />
        <BountyCards BountyCards={BountyDetailsData[1]} />
        <BountyCards BountyCards={BountyDetailsData[2]} />
        
      </div>
     
    </div>
  );
};

export default BountyDetails;

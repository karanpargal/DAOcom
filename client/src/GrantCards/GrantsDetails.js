import React from "react";
import GrantsCards from "./GrantsCards";

const GrantsDetails = () => {
  const GrantsDetailsData = [
    { Heading: "hi", Description: "hehe", Prize:"20K" , Time:"10 Days"},
    { Heading: "hi",  Description: "hehe" , Prize:"20K", Time:"10 Days"},
    { Heading: "hi",  Description: "hehe" , Prize:"20K", Time:"10 Days" },
  ];
  console.log(GrantsDetailsData);
  return (
    <div className="mt-10 font-display" id="BountyDetails">
      <p className=" text-2xl text-black font-bold  ">Grant Details </p>
      <div className="flex flex-row justify-center gap-10 mt-4">
        <GrantsCards GrantsCards={GrantsDetailsData[0]} />
        <GrantsCards GrantsCards={GrantsDetailsData[1]} />
        <GrantsCards GrantsCards={GrantsDetailsData[2]} />
      </div>
    </div>
  );
};

export default GrantsDetails;

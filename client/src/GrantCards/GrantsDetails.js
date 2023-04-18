import React from "react";
import GrantsCards from "./GrantsCards";

const GrantsDetails = (props) => {
  console.log(props.grants);
  const GrantsDetailsData = props.grants;
  return (
    <div className="mt-10 font-display" id="BountyDetails">
      <p className=" text-2xl text-black font-bold  ">Grant Details </p>
      <div className="flex flex-row justify-center gap-10 mt-8">
      {GrantsDetailsData.map((GrantsDetailsData) => (
          <GrantsCards GrantsCards={GrantsDetailsData} />
        ))}
      </div>
    </div>
  );
};

export default GrantsDetails;

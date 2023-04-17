import React from "react";
import JobCards from "./JobCards";

const JobDetails = (props) => {
  console.log(props.jobs);
  const JobDetailsData = props.jobs;
  return (
    <div className="mt-10 font-display" id="BountyDetails">
      <p className=" text-2xl text-black font-bold  ">Job Details </p>
      <div className="flex flex-row justify-center gap-10 mt-4">
      {JobDetailsData.map((JobDetailsData) => (
          <JobCards JobCards={JobDetailsData} />
        ))}
      </div>
    </div>
  );
};

export default JobDetails;

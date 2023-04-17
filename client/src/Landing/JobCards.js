import React from "react";

const JobCards = (props) => {
  return (
    <div>
      <div className="">
        <div className=" shadow-xl  bg-slate-50 rounded-lg h-56  flex flex-col border-black border w-72 text-black">
          <div className="  text-center">
            <h1 className=" mt-4 font-bold font-ubuntu ml-1 text-black text-2xl text-center underline underline-offset-4">
              {props.JobCards.title}
            </h1>
            <div className="pt-4 text-center">
              <h1 className="font-semibold ml-1 text-black text-lg text-center border-b-2">
                {props.JobCards.description}
              </h1>
            </div>
            <div className="items-center flex flex-row divide-x ml-24 mt-6 ">
              <div className="font-semibold ml-1 text-black text-base text-center ">
                {props.JobCards.location}
              </div>
              <div className="font-semibold ml-1 text-black text-base text-center">
                {props.JobCards.department}
              </div>
              <div className="font-semibold ml-1 text-black text-base text-center">
                {props.JobCards.type}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCards;

import React from "react";

const BountyCards = (props) => {
  return (
    <div>
      <div className="">
        <div className=" shadow-xl shadow-violet-300 shadow-xl shadow-violet-300 bg-slate-50 rounded-lg h-44	  flex flex-col   w-72 ">
          <div className="  text-center">
            <h1 className=" mt-4 font-Medium  ml-1 text-gray-500 text-left text-2xl  ">
              {props.BountyCards.title}
            </h1>
            <div className="mt-4 text-center">
              <p className="font-semibold ml-1 text-black leading-relaxed text-justify  text-base text-left  border-b">
                {props.BountyCards.description}
              </p>
            </div>
            <div className="items-center items-center flex flex-row  grid grid-cols-2 divide-x-2 mt-4 ">
              <div className="font-semibold  text-black text-base rounded-sm  text-center ">
                {props.BountyCards.rewards}
              </div>
              <div className="font-semibold  text-black text-base text-center">
                {props.BountyCards.deadline}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BountyCards;

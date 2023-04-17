import React from "react";

const BountyCards = (props) => {
  return (
    <div>
      <div className="">
        <div className=" shadow-xl shadow-violet-300 bg-slate-50 rounded-lg h-60 	  flex flex-col   w-72 ">
          <div>
            <img className="h-16 w-72" src={props.BountyCards.Image}></img>
          </div>
          <div className="  text-center">
            <h1 className=" mt-4 font-Medium  ml-1 text-gray-500 text-left text-2xl  ">
              {props.BountyCards.Heading}
            </h1>
            <div className="mt-2 mb-4 text-center">
              <p className="font-semibold ml-1 text-black leading-relaxed text-justify  text-base text-left  border-b">
                {props.BountyCards.Description}
              </p>
            </div>
            <div className="items-center items-center flex flex-row  grid grid-cols-2 divide-x-2 mt-4 ">
              <div className="font-semibold  text-black text-base rounded-sm  text-center ">
                {props.BountyCards.Prize}
              </div>
              <div className="font-semibold  text-black text-base text-center">
                {props.BountyCards.Time}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BountyCards;

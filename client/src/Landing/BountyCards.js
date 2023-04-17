import React from "react";

const BountyCards = (props) => {
  console.log(props);
  return (
    <div>
      <div className="">
        <div className=" shadow-xl  rounded-lg h-60 ring-2 ring-fuchsia-600	  flex flex-col  border w-72 ">
          <div>
            <img className="h-16 w-72" src={props.BountyCards.Image}></img>
          </div>
          <div className="  text-center">
            <h1 className=" pt-10 font-bold  ml-1 text-gray-500 text-left text-2xl  ">
              {props.BountyCards.Heading}
            </h1>
            <div className="mt-2 text-center">
              <p className="font-semibold ml-1 text-black text-base text-left border-b">
                {props.BountyCards.Description}
              </p>
            </div>
            <div className="items-center items-center flex flex-row justify-between  mt-">
              <div className="font-semibold ml-4 text-black text-base rounded-sm  text-center ">
                {props.BountyCards.Prize}
              </div>
              <div className="font-semibold mr-6 text-black text-base text-center">
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

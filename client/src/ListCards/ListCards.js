import React from "react";

const ListCards = (props) => {
  let next = "HI";
  if (props.ListCards.Button === "List Your opportunity") {
     next = "/PaysalEarnOrg";
  } else {
     next = "/PaySalEarnLanding";
  }


  return (
    <div className="bg-neutral-50">
      <div className=" shadow-xl  rounded-lg h-fit  flex flex-col border-black border w-80 text-black">
        <div>
          <img className="h-48 w-80" src={props.ListCards.Image}></img>
        </div>
        <div className="  text-center">
          <h1 className=" pt-10 font-bold font-ubuntu ml-1 text-black text-2xl text-center underline underline-offset-4">
            {props.ListCards.Heading}
          </h1>
          <div className="pt-7 text-center">  
            <h1 className="font-medium ml-1 text-black text-md text-center">
              {props.ListCards.Description}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a className="w-60 my-7  gap-x-1 rounded-lg py-1 text-base font-semibold text-white bg-blue-500" href={next}>
              {props.ListCards.Button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCards;

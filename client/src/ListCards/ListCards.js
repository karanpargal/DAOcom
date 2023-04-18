import React from "react";

const ListCards = (props) => {
  let next = "HI";
  if (props.ListCards.Button === "List Your opportunity") {
     next = "/PaysalEarnOrg";
  } else {
     next = "/PaySalEarnLanding";
  }


  return (
    <div className=" h-screen " >
      <div className=" shadow-2xl shadow-violet-300 bg-slate-50  rounded-lg h-fit  flex flex-col  border w-80 text-black">
        <div>
          <img className="h-24 w-24 m-auto mt-4" src={props.ListCards.Image}></img>
        </div>
        <div className="  text-center">
          <h1 className=" pt-10 font-bold font-ubuntu ml-1 text-black text-2xl text-center ">
            {props.ListCards.Heading}
          </h1>
          <div className="pt-7 text-center">  
            <h1 className="font-medium p-4 text-black  text-md text-center">
              {props.ListCards.Description}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a className="w-60 my-7  gap-x-1  text-black shadow-md shadow-violet-200  hover:text-white transition ease-in-out delay-150 bg-white hover:-translate-y-1  hover:scale-100 hover:bg-violet-400 duration-300 text-lg font-semibold rounded-sm  outline  outline-1 outline-fuchsia-600 px-8rounded-lg py-1 text-base " href={next}>
              {props.ListCards.Button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCards;

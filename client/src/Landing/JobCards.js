import React from "react";

const JobCards = (props) => {
  return (
    <div>
      <div className="">
        <div className=" shadow-xl shadow-violet-300 shadow-xl shadow-violet-300 bg-slate-50 rounded-lg h-52	p-2  flex flex-col mb-6  w-72 ">
          <div className="  text-center">
            <h1 className="  mt-4 font-Medium font-semibold  ml-2 text-gray-500 text-left text-2xl ">
              {props.JobCards.title}
            </h1>
            <div className="mt-2 text-center">
              <h1 className="font-semibold ml-1 text-black leading-relaxed text-justify  p-2 text-base text-left  border-b-2">
                {props.JobCards.description}
              </h1>
            </div>
            <div className="items-center items-center flex flex-row border-b-2  grid grid-cols-3 divide-x-2 mt-a ">
              <div className="font-semibold  text-black text-base rounded-sm  text-center  ">
                {props.JobCards.location}
              </div>
              <div className="font-semibold  text-black text-base rounded-sm  text-center ">
                {props.JobCards.department}
              </div>
              <div className="font-semibold  text-black text-base rounded-sm  text-center ">
                {props.JobCards.type}
              </div>
            </div>
            <div className="p-2 text-center">
              <button className="text-black shadow-md shadow-violet-300 hover:text-white transition ease-in-out delay-150 bg-white hover:-translate-y-1  hover:scale-90 hover:bg-violet-400 duration-300 text-base font-semibold rounded-md  outline  outline-1 outline-fuchsia-400 px-2">
                <a href="/Submission">Tap to Submit</a>

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCards;

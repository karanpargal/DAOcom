import React from 'react'
const FeaturesCard = (props) => {
    return (
      <div>
        <div className=" shadow-2xl shadow-violet-400 bg-slate-50 rounded-lg h-64 flex flex-col  border w-80 text-black">
         
          
          <div className="  text-center ">
            <h1 className=" pt-10 font-bold font-ubuntu ml-1 text-black text-2xl text-center border-b-2 border-fuchsia-500" >
              {props.FeaturesData.Heading}
            </h1>
            <div className=" text-center">
              <h1 className="p-6 font-semibold font-ubuntu ml-1 text-black text-lg text-center">
              {props.FeaturesData.Description}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturesCard;
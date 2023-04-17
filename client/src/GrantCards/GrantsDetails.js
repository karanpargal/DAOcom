import React from 'react'
import GrantsCards from './GrantsCards';

const GrantsDetails = () => {
  const GrantsDetailsData = [
    { Heading: "hi" },
    { Heading: "hi" },
    { Heading: "hi" },
  ];
  console.log(GrantsDetailsData);
  return (
    <div className="mt-10 font-display" id="BountyDetails">
    <p className=" text-2xl text-black font-bold ml-48 ">Grant Details </p>
    <div className="flex flex-row justify-center gap-10 p-20">
        <GrantsCards GrantsCards={GrantsDetailsData[0]} />
        <GrantsCards GrantsCards={GrantsDetailsData[1]} />
        <GrantsCards GrantsCards={GrantsDetailsData[2]} />
        
      </div>
     
    </div>
     
  )
}

export default GrantsDetails
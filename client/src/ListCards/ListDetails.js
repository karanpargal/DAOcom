import React from "react";
import ListCards from "./ListCards";

const ListDetails = () => {
  const ListCardsData = [
    {Image:"#",
      Heading: "Looking for talent?",
      Description:
        "Organisations can manage their employees, their professional and payroll details",
        Button:"List Your opportunity"
    },
    {Image:"#",
      Heading: "Looking to earn?",
      Description:
        "Organisation can pay their employees with just one click after connecting the hardware wallet",
      Button:"Get to Work"
    },
    
  ];

  console.log(ListCardsData);

  return (
    <div className="mt-10 font-display" id="ListDetails">
      <p className=" text-4xl text-black font-bold ml-48 mb-12">ListDetails </p>
      <div className="flex flex-row justify-center gap-10 p-20">
        <ListCards ListCards={ListCardsData[0]} />
        <ListCards ListCards={ListCardsData[1]} />
        
      </div>
    </div>
  );
};

export default ListDetails;

import React from "react";
import ListCards from "./ListCards";

const ListDetails = () => {
  const ListCardsData = [
    {
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLUYbWZtBYC6Ve0pLlQ51wuf5mrGSVIP3H4rgH_9x9UJXA5-U814UKVbRs5tavG6Tp5A&usqp=CAU",
      Heading: "Looking for talent?",
      Description:
        "List a bounty, job, or grant for your project and find your next contributor or employee",
      Button: "List Your opportunity",
    },
    {
      Image:
        "https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/62ee056517fa63b5cb91fbcf_Rectangle%201%20(64).svg",
      Heading: "Looking to earn?",
      Description:
        "Create a profile to get notified when new earning opportunities get posted and build your on-chain resume",
      Button: "Get to Work",
    },
  ];

  console.log(ListCardsData);

  return (
    <div className=" font-display" id="ListDetails">
      <nav className="bg-neutral-50 h-16 flex flex-row border-b-2">
        <div href="" class=" ">
          <h1 class="mt-4 ml-1 text-xl text-black font-semibold  ">
            Paysal-earn
          </h1>
        </div>
        
      </nav>
      <div className="flex flex-row justify-center gap-10 p-8 pt-24  h-[100%]">
        <ListCards ListCards={ListCardsData[0]} />
        <ListCards ListCards={ListCardsData[1]} />
      </div>
    </div>
  );
};

export default ListDetails;

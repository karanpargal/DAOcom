import React from "react";
import ListCards from "./ListCards";
import Logo from "../Assets/Logo.png"

const ListDetails = () => {
  const ListCardsData = [
    {
      Image:
        "https://cdn-icons-png.flaticon.com/512/1251/1251897.png?w=740&t=st=1681775262~exp=1681775862~hmac=811dd6a10788ed63b355bcb5c823d9a9aca06de4891835373acafa6461e4e351s://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLUYbWZtBYC6Ve0pLlQ51wuf5mrGSVIP3H4rgH_9x9UJXA5-U814UKVbRs5tavG6Tp5A&usqp=CAU",
      Heading: "Looking for talent?",
      Description:
        "List a bounty, job, or grant for your project and find your next contributor or employee",
      Button: "List Your opportunity",
    },
    {
      Image:
        "https://cdn-icons-png.flaticon.com/512/3427/3427292.png",
      Heading: "Looking to earn?",
      Description:
        "Create a profile to get notified when new earning opportunities get posted and build your on-chain resume",
      Button: "Get to Work",
    },
  ];

  console.log(ListCardsData);

  return (
    <div className=" font-display" id="ListDetails">
      <nav className="bg-neutral-50 pacity-75  h-16 flex flex-row border-b-2 border-fuchsia-300">
      <div href="" class=" ">
          <img class="w-40 h-18 mt-2  "  src={Logo}>
           
          </img>
        </div>
        
      </nav>
      <div className="flex flex-row justify-center gap-16 p-8 pt-24  h-[100%]">
        <ListCards ListCards={ListCardsData[0]} />
        <ListCards ListCards={ListCardsData[1]} />
      </div>
    </div>
  );
};

export default ListDetails;

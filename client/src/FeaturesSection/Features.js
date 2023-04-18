import React from 'react'
import FeaturesCard from './FeaturesCard';

const Features = () => {
    const FeaturesData = [
      {
     
        Heading: "Effective management",
        Description:
          "DAOs can manage their contributors, their professional and reward details.",
      },
      {
       
        Heading: "Cross-Chain Support",
        Description:
          "We support cross chain transaction as well to have the freedom to get funds in whichever chain you want.",
      },
      {
        
        Heading: "Multiple Opportunities",
        Description:
          "Contributors can have a space to see all the available opportunities in the ecosystem",
      },
    ];
  
    return (
      <div className="mt-4 font-display" id="features">
        <p className=" text-4xl text-[black] font-bold ml-48 mb-12">
          Features{" "}
        </p>
        <div className="flex flex-row justify-center gap-10 p-20">
          <FeaturesCard FeaturesData={FeaturesData[0]} />
          <FeaturesCard FeaturesData={FeaturesData[1]} />
          <FeaturesCard FeaturesData={FeaturesData[2]} />
        </div>
      </div>
    );
  };
  
  export default Features;
  


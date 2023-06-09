import React from "react";
import LandingNavbar from "../Navbar/LandingNavbar";
import Dollar from "../Assets/Dollar.png";
import Features from "../FeaturesSection/Features";


const Landing = () => {
  return (
    <div>
      <LandingNavbar />
      <div className="flex flex row h-screen">
        <div className="mt-16 flex flex-col">
          <h1 className="text-4xl ml-8 mt-8 font-semibold">
            Empowering DAOs To Shape The Future Together
          </h1>
          <div className="ml-1 mt-8 leading-light w-5/6 text-2xl p-8 leading-7 line-height-2 tracking-wide ">
            <p>
              Elevate your DAO with our platform's bounties, jobs, and grants,
              cross-chain payments, and build you proof of work.
            </p>
            <p>
              {" "}
              Empower your contributors and unlock your DAO's potential today!
              Join the future of decentralized organizations..
            </p>
          </div>
        </div>
        <div className="flex flex-col mr-24 mt-8">
          <img
            src={Dollar}
            className="mr-24 mt-10"
            width="500"
            height="500"
          ></img>
        </div>
      </div>
      <div><Features/></div>
    </div>
  );
};

export default Landing;

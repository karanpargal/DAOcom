import React from "react";

const AddBounty = () => {
  const sendBounty = async () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const deadline = document.getElementById("deadline").value;
    const rewards = document.getElementById("rewards").value;
    const tags = document.getElementById("tags").value;
    const walletAddress = document.getElementById("walletAddress").value;
    const bounty = {
      title,
      description,
      deadline,
      rewards,
      tags,
      walletAddress,
    };
    console.log(bounty);
    const response = await fetch("https://daocom.onrender.com/bounties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bounty),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="h-screen ">
      <div class=" w-full m-auto max-w-2xl pt-6 h-72  text-black ">
        <div class=" flex flex-col shadow-2xl shadow-violet-300 gap-4 border-fuchsia-600 border-2 justify-center item-center text-white  rounded px-10 pt-6 pb-8 ">
          <h1 className="block text-black text-2xl font-bold mb-2">
            Add Bounty
          </h1>
          <div class="mb-4 mt-2 ">
            <label
              class="block mb-2  text-black text-lg font-semibold "
              for="title"
            >
              Title
            </label>
            <input
              className=" appearance-none mb-4  border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="title"
              type="text"
              placeholder="John Doe"
            ></input>
            <label
              class="block  text-black text-lg font-semibold mb-2"
              for="Name"
            >
              Description
            </label>
            <input
              className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="description"
              type="text"
              placeholder=""
            ></input>
            <label
              class="block text-black  text-lg font-semibold mb-2"
              for="Name"
            >
              Deadline
            </label>
            <input
              className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="deadline"
              type="text"
              placeholder=""
            ></input>
            <label
              class="block text-black text-lg font-semibold mb-2"
              for="Name"
            >
              Rewards
            </label>
            <input
              className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="rewards"
              type="text"
              placeholder=""
            ></input>
            <label
              class="block text-black text-lg font-semibold mb-2"
              for="Name"
            >
              Tags
            </label>
            <input
              className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="tags"
              type="text"
              placeholder=""
            ></input>
            <label
              class="block text-black text-lg font-semibold mb-2"
              for="Name"
            >
              Wallet Address
            </label>
            <input
              className=" appearance-none mb-4  border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="walletAddress"
              type="text"
              placeholder=""
            ></input>
            <button className="text-black" onClick={() => {
              sendBounty();
            }}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBounty;

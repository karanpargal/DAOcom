import React from "react";

const AddBounty = () => {
  return (
    <div>
      <div class=" w-full m-auto  max-w-2xl drop-shadow-2xl text-black">
        <div class=" flex flex-col gap-4 border-fuchsia-600 border-2 justify-center item-center text-white  rounded px-10 pt-4 pb-10 ">
          <h1 className="block text-black text-2xl font-bold mb-2">
            Add Bounty
          </h1>
          <div class="mb-4">
            <label class="block text-black text-sm font-bold mb-2" for="Name">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Title"
              type="text"
              placeholder="John Doe"
            ></input>
            <label class="block text-black text-sm font-bold mb-2" for="Name">
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Description"
              type="text"
              placeholder=""
            ></input>
             <label class="block text-black text-sm font-bold mb-2" for="Name">
              Deadline
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Deadline"
              type="text"
              placeholder=""
            ></input>
             <label class="block text-black text-sm font-bold mb-2" for="Name">
              Rewards
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Rewards"
              type="text"
              placeholder=""
            ></input>
             <label class="block text-black text-sm font-bold mb-2" for="Name">
              Tags
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Tags"
              type="text"
              placeholder=""
            ></input>
             <label class="block text-black text-sm font-bold mb-2" for="Name">
              Wallet Address 
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="WalletAdress"
              type="text"
              placeholder=""
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBounty;

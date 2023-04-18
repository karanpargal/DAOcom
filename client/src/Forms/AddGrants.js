import React from "react";

const AddGrants = () => {
  const sendGrant = () => {
    const title = document.getElementById("Title").value;
    const description = document.getElementById("Description").value;
    const deadline = document.getElementById("Deadline").value;
    const amount = document.getElementById("Amount").value;
    const walletAddress = document.getElementById("WalletAdress").value;
    const grant = {
      title,
      description,
      deadline,
      amount,
      walletAddress,
    };
    const response = fetch("https://daocom.onrender.com/grants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(grant),
    });
    console.log(response);
  };

  return (
    <div className="h-screen ">
      <div class=" w-full m-auto max-w-2xl pt-16 h-72  text-black ">
        <div class=" flex flex-col shadow-2xl shadow-violet-300 gap-4 border-fuchsia-600 border-2 justify-center item-center text-white  rounded px-10 pt-8 pb-2 ">
          <h1 className="block text-black text-2xl font-bold mb-2">
            Add Grants
          </h1>
          <div class="mb-4 mt-2 ">
            <label
              class="block mb-2  text-black text-lg font-semibold "
              for="Name"
            >
              Title
            </label>
            <input
              className=" appearance-none mb-4  border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="Title"
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
              id="Description"
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
              id="Deadline"
              type="text"
              placeholder=""
            ></input>
            <label
              class="block text-black text-lg font-semibold mb-2"
              for="Name"
            >
              Amount
            </label>
            <input
              className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="Amount"
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
              id="WalletAdress"
              type="text"
              placeholder=""
            ></input>
            <button
              className="text-black shadow-md shadow-violet-300 hover:text-white transition ease-in-out delay-150 bg-white hover:-translate-y-1  hover:scale-100 hover:bg-violet-400 duration-300 text-lg font-semibold rounded-sm  outline  outline-1 outline-fuchsia-600 px-8"
              onClick={() => {
                sendGrant();
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGrants;

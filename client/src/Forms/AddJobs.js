import React from "react";

const AddJobs = () => {
  const sendJob = async (e) => {
    e.preventDefault();
    const title = e.target.elements.Title.value;
    const description = e.target.elements.Description.value;
    const department = e.target.elements.Department.value;
    const location = e.target.elements.Location.value;
    const type = e.target.elements.Type.value;
    const walletAddress = e.target.elements.WalletAdress.value;
    const job = {
      title,
      description,
      department,
      location,
      type,
      walletAddress,
    };
    console.log(job);
    const response = await fetch("https://daocom.onrender.com/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="h-screen ">
      <div class=" w-full m-auto max-w-2xl pt-6 h-72  text-black ">
        <div class=" flex flex-col shadow-2xl shadow-violet-300 gap-4 border-fuchsia-600 border-2 justify-center item-center text-white  rounded px-10 pt-2 pb-2 ">
          <h1 className="block text-black text-2xl font-bold mb-2">Add Jobs</h1>
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
              placeholder="Your job description"
            ></input>
            <label
              class="block text-black  text-lg font-semibold mb-2"
              for="Name"
            >
              Department
            </label>
            <input
              className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="Department"
              type="text"
              placeholder="Technical"
            ></input>
            <label
              class="block text-black text-lg font-semibold mb-2"
              for="Name"
            >
              Location
            </label>
            <input
              className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="Location"
              type="text"
              placeholder="Remote/India"
            ></input>
            <label
              class="block text-black text-lg font-semibold mb-2"
              for="Name"
            >
              Type
            </label>
            <input
              className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="Type"
              type="text"
              placeholder="Internship/Full-Time/Part-Time"
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
              placeholder="0x.."
            ></input>
            <button className="text-black shadow-md shadow-violet-300 hover:text-white transition ease-in-out delay-150 bg-white hover:-translate-y-1  hover:scale-100 hover:bg-violet-400 duration-300 text-lg font-semibold rounded-sm  outline  outline-1 outline-fuchsia-600 px-8" onClick={() => {
              sendJob();
            }}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;

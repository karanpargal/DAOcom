import React from 'react'

const AddJobs = () => {
  return (
    <div className="h-screen ">
      <div class=" w-full m-auto max-w-2xl pt-6 h-72  text-black ">
        <div class=" flex flex-col shadow-2xl shadow-violet-300 gap-4 border-fuchsia-600 border-2 justify-center item-center text-white  rounded px-10 pt-6 pb-8 ">
          <h1 className="block text-black text-2xl font-bold mb-2">
            Add Jobs
          </h1>
          <div class="mb-4 mt-2 ">
            <label class="block mb-2  text-black text-lg font-semibold " for="Name">
              Title
            </label>
            <input
              className=" appearance-none mb-4  border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="Title"
              type="text"
              placeholder="John Doe"
            ></input>
            <label class="block  text-black text-lg font-semibold mb-2" for="Name">
              Description
            </label>
            <input
              className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="Description"
              type="text"
              placeholder=""
            ></input>
             <label class="block text-black  text-lg font-semibold mb-2" for="Name">
              Department
            </label>
            <input
              className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="Deadline"
              type="text"
              placeholder=""
            ></input>
             <label class="block text-black text-lg font-semibold mb-2" for="Name">
              Location
            </label>
            <input
              className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="Rewards"
              type="text"
              placeholder=""
            ></input>
             <label class="block text-black text-lg font-semibold mb-2" for="Name">
              Type
            </label>
            <input
              className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="Tags"
              type="text"
              placeholder=""
            ></input>
             <label class="block text-black text-lg font-semibold mb-2" for="Name">
              Wallet Address 
            </label>
            <input
              className=" appearance-none mb-4  border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="WalletAdress"
              type="text"
              placeholder=""
            ></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddJobs
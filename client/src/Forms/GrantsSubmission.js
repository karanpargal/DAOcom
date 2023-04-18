import React from 'react'

const GrantsSubmission = () => {
  return (
    <div><div><div className="h-screen ">
    <div class="  m-auto max-w-2xl pt-20 h-72  text-black   ">
      <div class=" flex flex-col shadow-2xl shadow-violet-300 gap-4 border-fuchsia-600 border-2 justify-center item-center text-white  rounded px-10 pt-8 pb-8 ">
        <h1 className="block text-black text-2xl font-bold mb-2">
          Proposal form
        </h1>
        <div class="mb-4 mt-2 ">
          <label
            class="block mb-2  text-black text-lg font-semibold "
            for="title"
          >
            Name
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
            Email
          </label>
          <input
            className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
            id="description"
            type="text"
            placeholder="xyz@gmail.com"
          ></input>
          
          <label
            class="block text-black text-lg font-semibold mb-2"
            for="Name"
          >
            Submission link
          </label>
          <input
            className=" appearance-none mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight "
            id="tags"
            type="text"
            placeholder="Grant proposal link"
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
            placeholder="0x..."
          ></input>
          <button className="text-black shadow-md shadow-violet-300 hover:text-white transition ease-in-out delay-150 bg-white hover:-translate-y-1  hover:scale-100 hover:bg-violet-400 duration-300 text-lg font-semibold rounded-sm  outline  outline-1 outline-fuchsia-600 px-8" 
            >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div></div></div>
  )
}

export default GrantsSubmission
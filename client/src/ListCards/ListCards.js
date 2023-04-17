import React from 'react'

const ListCards = (props) => {
  console.log(props)
    return (
      <div className='bg-neutral-50'>
        <div className=" shadow-xl  rounded-lg h-fit  flex flex-col border-black border w-80 text-black">
         
        <div>
              <img className='h-24 w-80' src={props.ListCards.Image}>
               
              </img>
            </div>
          <div className="  text-center">
            <h1 className=" pt-10 font-bold font-ubuntu ml-1 text-black text-2xl text-center underline underline-offset-4" >
              {props.ListCards.Heading}
            </h1>
            <div className="pt-7 text-center">
              <h1 className="font-semibold ml-1 text-black text-lg text-center">
              {props.ListCards.Description}
              </h1>
            </div>
            <div className='items-center'>
              <button className="flex  w-60 mt-10 ml-10 gap-x-1 rounded-lg px-8  py-2 text-base font-semibold text-black bg-blue-500">
              {props.ListCards.Button}
              </button>
              
            </div>
            
          </div>
        </div>
      </div>
  );
};

export default ListCards;
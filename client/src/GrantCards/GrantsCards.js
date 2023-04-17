import React from 'react'

const GrantsCards = (props) => {
    return <div>
    <div className=''>
       <div className=" shadow-xl  bg-slate-50 rounded-lg h-60  flex flex-col border-black border w-72 text-black">
        
       <div>
             <img className='h-16 w-72'>
              
             </img>
           </div>
         <div className="  text-center">
           <h1 className=" mt-4 font-bold font-ubuntu ml-1 text-black text-2xl text-center underline underline-offset-4" >
             {props.GrantsCards.Heading}
           </h1>
           <div className="pt-4 text-center">
             <h1 className="font-semibold ml-1 text-black text-lg text-center border-b-2">
             {props.GrantsCards.Description}
             </h1>
           </div>
           <div className='items-center flex flex-row divide-x ml-24 mt-6 '>
             <div className='font-semibold ml-1 text-black text-base text-center '>
             {props.GrantsCards.Prize}

             </div>
             <div className='font-semibold ml-1 text-black text-base text-center'>
              
              {props.GrantsCards.Time}
             </div>
           </div>
           
         </div>
       </div>
     </div>
 </div>;
};

export default GrantsCards
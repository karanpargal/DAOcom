import React from 'react'

const FeaturesCard = () => {
  return (
    <div className='flex min-h-screen flex-col justify-center bg-slate-100'>
        <div className='group h-96 w-96 [perspective:1000px]' >
            <div className='realative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                <div class="absolute inset-0">
                    <img className="object-cover rounded-xl h-full w-full" src="https://cdn-icons-png.flaticon.com/512/4481/4481316.png"></img>

                </div>
                <div className='absolute inset-0 h-full w-full rounded-xl text-center bg-black px-12 text-slate-200 [transform:rotateY(180deg)][backface-visibility:hidden]'>
                    <div className='flex mini-h-full flex-col item-center justify-center'>
                        <h1 className='text-3xl '>me yeelo</h1>
                        <p className='text-lg'>khuch bhi</p>
                        <p className='text-base'>lorem ipsem  gcuyrgvliw</p>

                    </div>


                </div>

            </div>

        </div>
    </div>
  )
}

export default FeaturesCard
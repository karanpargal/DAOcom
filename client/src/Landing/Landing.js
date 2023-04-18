import React from 'react'
import LandingNavbar from '../Navbar/LandingNavbar'
import organization from '../Assets/organization.png'

const Landing = () => {
  return (

    <div><LandingNavbar/>
    <div className='flex flex row h-screen'>
        <div className='mt-8'>
        <h1 className='text-4xl ml-8 mt-8 font-semibold'>Empowering DAOs To Shape The Future Together</h1>
        <div className="ml-8 mt-8 leading-light w-3/4 text-2xl">
        <p >Elevate your DAO with our platform's bounties, jobs, 
        and grants, cross-chain payments, and build you proof of work.</p>
          <p >  Empower your contributors and unlock your DAO's potential today!</p>
           <p >Join the future of decentralized organizations..</p>
        </div>
        
        </div>
        <div>
            <img src={organization} className='mr-16 mt-10' width="500" height="500">
            </img>
        </div>
        
    </div>
    </div>
  )
}

export default Landing
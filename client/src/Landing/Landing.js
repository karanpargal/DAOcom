import React from 'react'
import LandingNavbar from '../Navbar/LandingNavbar'

const Landing = () => {
  return (

    <div><LandingNavbar/>
    <div className='flex flex row'>
        <div className='mt-8'>
        <p className='text-xl'>Lorem Ipsum</p>
        <p className='mt-4 text-base '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at euismod tortor. Phasellus nulla mauris, ornare vitae nisl ac, mattis consectetur urna. Donec ultrices viverra lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta mollis mattis. Curabitur lacinia purus tempor dictum ultrices. Pellentesque varius quis orci a malesuada. Nunc quis interdum urna. Pellentesque rhoncus congue vehicula. Ut scelerisque suscipit sem, sit amet tempor purus porta nec.</p>
        </div>
        <div>
            <img src="#" className='mr-16' width="500" height="500">
            </img>
        </div>
        
    </div>
    </div>
  )
}

export default Landing
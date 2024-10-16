import React from 'react'
import { FaLinkedinIn, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa6'

const End = () => {
  return (
    <>
      <footer className='py-12'>

        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
              <FaLinkedinIn size={25} />
              <FaGithub size={25} />
              <FaFacebook size={25} />
              <FaInstagram size={25} />

            </div>
            <div className='mt-8 border-t border-pink-400 pt-5 flex flex-col items-center'>
              <p className='text-sm'>&copy; Thank You For Visiting </p>

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default End
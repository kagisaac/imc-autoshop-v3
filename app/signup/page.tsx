"use client"
import { CustomButton } from '@/components';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Image from "next/image";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaGithub } from "react-icons/fa";
import Link from 'next/link';
const signup = () => {
//   const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here
    if (email && password) {
      // Example: Authenticate user using API
      console.log('Logging in...');
    //   router.push('/dashboard'); // Redirect to dashboard after successful login
    } else {
      setError('Please fill in all fields.');
    }
  };
  return (
    <div style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(./hero.png)', backgroundSize:"cover" ,  objectFit: 'contain' }} className='bg-sky-100 flex justify-center place-items-center  h-screen relative'>
        <div className="bg-sky-50  rounded-xl grid grid-cols-1 sm:grid-cols-2  w-[80%] md:w-[60%]  gap-3 p-3 ">
           <div style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(./signup1.jpeg)', backgroundSize:"cover" , backgroundPosition: 'center',  objectFit: 'contain' }} className='block'>

</div>
            <div className=' p-2'>
                <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 underline">Sign up  </h2>
          {error && <p className="mt-2 text-red-600 text-sm text-center">{error}</p>}
        </div>
        <div className='flex justify-center gap-3 mt-3 '>
          {/* login with external auth gmail github facebook */}
          <div className='text-red-500  border-2 rounded-full border-red-400 p-2'>
            <BiLogoGmail size={40} />

          </div>
          <div className='text-sky-500  border-2 rounded-full border-sky-400 p-2'>
         
            <FaFacebook size={40} />

          </div>
          <div className='text-black-500  border-2 rounded-full border-sky-900 p-2'>
           
            <FaGithub size={40}  />

          </div>

        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="">
              Full Name
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="ex: kagenza isaac"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="">
              Confirm password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Confirm password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
         <div>
           <CustomButton
            title='Sign up'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue hover:bg-sky-500'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            // handleClick={() => setIsOpen(true)}
          />
         </div>
         <div>
         
         <Link href="/login" className="flex justify-end text-sm  text-gray-800 hover:cursor-pointer hover:text-blue-500 duration-100 transition underline">

   Login To Your Account

</Link>
        </div>
           </form>

            </div>
           

        </div>

    </div>
   
  )
}

export default signup
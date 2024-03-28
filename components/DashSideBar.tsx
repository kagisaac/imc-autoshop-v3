import React from 'react'
import Image from "next/image";
import { FaHome, FaUser, FaCar, FaMoneyBillAlt, FaHistory } from 'react-icons/fa';


export const NavLinks = [
  {
    id: "1",
    name: "Home",
    link: "/dashboard",
    icon: <FaHome />,
  },
  {
    id: "2",
    name: "Cars",
    link: "/dashboard/carCards",
    icon: <FaCar />,
  },
  // {
  //   id: "3",
  //   name: "Users",
  //   link: "/users",
  //   icon: <FaUser />,
  // },
  {
    id: "3",
    name: "Orders",
    link: "/dashboard/orders",
    icon: <FaMoneyBillAlt />,
  },
  // {
  //   id: "4",
  //   name: "History",
  //   link: "/history",
  //   icon: <FaHistory />,
  // },
];
const DashSideBar = () => {
  return (
    <div className='h-[100%]   bg-sky-300 '>
      <div className=" flex h-screen fixed  flex-col justify-between p-3  ">
        
          <div className="grid  center sm:grid-cols-1 lg:grid-cols-2   gap-2  mt-5 ">
            {/* <Image width={30} height={30} src="./imc8.png"/> */}
            <Image
                    src='/imc8.png'
                    alt='close'
                    width={100}
                    height={100}
                    className='object-contain rounded-xl bg-sky-100'
                  />
                  <div className="grid ">
                    <h2 className='sm:text-sm md:text-xl font-bold '>Welcome</h2>
                    <p>Isaac</p>
                  </div>

          
           <div className=" w-fit ">
            <ul className="flex-col items-center gap-6 px-4">
              {NavLinks.map((link) => (
                <li key={link.id} className='flex justify-start gap-3 place-items-center space-x-5 mt-5'>
                  {link.icon}
                  <a
                    className="inline-block py-1 hover:border-b-2 text-secondary hover:text-primary hover:boder-secondary transition-colors
                    duration-500 text-lg font-medium"
                    href={link.link}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>       
      
        </div>
        </div>
      <div>
        <h1 className='font-light text-xl'>InterFace Auto Shop 🛒</h1>
      </div>
      </div>
   
    </div>
  )
}

export default DashSideBar
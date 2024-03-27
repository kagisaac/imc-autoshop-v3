"use client";

import { useState } from "react";
import Image from "next/image";

import { calculateCarRent } from "@/utils";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
import { FaDumpster, FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import UpdateCars from "./UpdateCars";

interface CarCardProps {
  car: CarProps;
}

const DashCarCard = ({ car }: CarCardProps) => {
    const { city_mpg, make, model, transmission, drive} = car;

  const [isOpen, setIsOpen] = useState(false);
   const [isOpenDetail, setIsOpenDetail] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
          <div className="flex justify-between ">
            <div className="flex gap-2 cursor-pointer" onClick={()=>setIsOpen(true)}>
                <FaEdit size={30} color="gray" />
              
            </div>
            <div className="flex gap-2 cursor-pointer ">
                <MdDelete size={30} color="red"  />
             
            </div>

        
        </div>
      </div>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {car.price}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={`/${car.carImage[0].image}`} alt={car.model} layout="fill" priority={true} className="object-contain" />
      </div>

      <div className='relative flex-col space-y-5 w-full mt-2'>
        <div className=' md:flex group-hover:invisible w-full justify-between gap-3   text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>
      

        <div className="car-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpenDetail(true)}
          />
        </div>
      </div>

      <UpdateCars isOpen={isOpen} closeModal={() => setIsOpen(false)}  />
       <CarDetails isOpen={isOpenDetail} closeModal={() => setIsOpenDetail(false)} car={car}/>
    </div>
  )
}

export default DashCarCard
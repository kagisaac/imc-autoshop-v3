import { Fragment, useState } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@/types";
import { CustomButton } from ".";
// import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {


   const [imageIndex,setImageIndex]= useState(0);
   return(

  
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10 ' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto '>
          <div className='flex min-h-full items-center justify-center p-4 text-center '>
            <Transition.Child
              // as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
              >
              <Dialog.Panel className='relative sm:w-full md:w-[400px] lg:w-[500px] max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
              {/* <h2 className="z-10 text-red-500 font-4xl" onClick={closeModal}>dsdcjskdjc</h2> */}
                <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  onClick={closeModal}
                >
                  <Image
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className='object-contain'
                  />
                </button>

                <div className='flex-1 flex flex-col gap-3 '>
                  <div className='relative w-full  h-40 bg-pattern bg-cover bg-center rounded-lg border-5 border-red-500'>
                    <Image   src={`/${car.carImage[imageIndex].image}`} alt='car model' fill priority className='object-contain ' />                   
                  </div>
                  <div className='flex gap-3 overflow-x-scroll'>
                    {
                      car.carImage.map((subCar,index)=>{
                        return(
                          <>
                           <div key={index}  className='flex  flex-wrap relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                    <Image   src={`/${subCar.image}`} alt='car model' fill priority className='object-contain w-full h-full transition-transform transform ' onClick={()=>setImageIndex(index)} />                     
                     
                    </div>
                          </>
                        )
                      })
                    }
                    
                  </div>
                </div>

                <div className='flex-1 flex flex-col gap-2'>
                  <div className="flex justify-between">

                  <p className='font-semibold text-xl capitalize'>
                    {car.make} {car.model}
                  </p>
                  <div className="flex gap-2">

                  <h3 className="font-semibold text-xl capitalize"><p className="text-sm font-serif font-normal underline">fixed price:</p>${car.price}</h3>
                  <h3 className="font-semibold text-xl capitalize"><p className="text-sm font-serif font-normal underline">leasing price:</p>${car.reasingPrice}</h3>
                  </div>
                  </div>


                  <div className='mt-3 flex-col flex-wrap gap-4'>
                    <div className="flex justify-between  gap-5 w-full text-right">
                      <h4 className="text-grey capitalize">City MPG:</h4>
                      <p className="text-black-100 font-semibold">{car.city_mpg}</p>
                    </div>
                    <div className="flex justify-between  gap-5 w-full text-right">
                      <h4 className="text-grey capitalize">Class:</h4>
                      <p className="text-black-100 font-semibold">{car.class}</p>
                    </div>
                    <div className="flex justify-between  gap-5 w-full text-right">
                      <h4 className="text-grey capitalize">Combination MPG:</h4>
                      <p className="text-black-100 font-semibold">{car.combination_mpg}</p>
                    </div>
                    <div className="flex justify-between  gap-5 w-full text-right">
                      <h4 className="text-grey capitalize">Cylinders:</h4>
                      <p className="text-black-100 font-semibold">{car.cylinders}</p>
                    </div>
                    <div className="flex justify-between  gap-5 w-full text-right">
                      <h4 className="text-grey capitalize">Displacement: </h4>
                      <p className="text-black-100 font-semibold">{car.displacement}</p>
                    </div>
                    <div className="flex justify-between  gap-5 w-full text-right">
                      <h4 className="text-grey capitalize">Drive: </h4>
                      <p className="text-black-100 font-semibold">{car.drive}</p>
                    </div>
                    <div className="flex justify-between  gap-5 w-full text-right">
                      <h4 className="text-grey capitalize">Fuel Type:  </h4>
                      <p className="text-black-100 font-semibold">{car.fuel_type}</p>
                    </div>
                    <div className="flex justify-between  gap-5 w-full text-right">
                      <h4 className="text-grey capitalize">Highway MPG: </h4>
                      <p className="text-black-100 font-semibold">{car.highway_mpg}</p>
                    </div>
                    <div className="flex justify-between  gap-5 w-full text-right">
                      <h4 className="text-grey capitalize">Make: </h4>
                      <p className="text-black-100 font-semibold">{car.make}</p>
                    </div>
                    <div className="flex justify-between  gap-5 w-full text-right">
                      <h4 className="text-grey capitalize">Model: </h4>
                      <p className="text-black-100 font-semibold">{car.model}</p>
                    </div>
                    <div className="flex justify-between  gap-5 w-full text-right">
                      <h4 className="text-grey capitalize">Transmission: </h4>
                      <p className="text-black-100 font-semibold">{car.transmission}</p>
                    </div>
                    <div className="flex justify-between  gap-5 w-full text-right">
                      <h4 className="text-grey capitalize">Year: </h4>
                      <p className="text-black-100 font-semibold">{car.year}</p>
                    </div>             




                    {/* {Object.entries(car).map(([key, value]) => (
                      <div className='flex justify-between gap-5 w-full text-right' key={key} >

                        





                        <h4 className='text-grey capitalize'>
                          {key.split("_").join(" ")}
                          
                        </h4>
                        <p className='text-black-100 font-semibold'>
                          {value}
                          
                        </p>
                      </div>
                    ))} */}
                  </div>
                 
          <CustomButton
            title='Buy'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            // handleClick={() => setIsOpen(true)}
          />

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
   )
};

export default CarDetails;

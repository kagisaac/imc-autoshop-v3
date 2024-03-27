"use client";
import { CarCard, CarDemo, CustomButton, CustomFilter, SearchBar } from '@/components'
import React, { useState } from 'react'
import { fuels, yearsOfProduction,imcCars } from '@/constants'
import AddNewCar from '@/components/AddNewCar';
import DashCarCard from '@/components/DashCarCard';
import CarDetails from '@/components/CarDetails';
const CarCards = () => {
  const isDataEmpty = !Array.isArray(imcCars) || imcCars.length < 1 || !imcCars;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  return (
    <div>
  <div className='  md:w-full sm:w-[350px]'>
    <div className='mt-12   padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>InterFace Autoshop </h1>
          <p>Mange All Cars in the Store</p>

        </div>
        

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
             <CustomButton
            title='Add New Car'
            containerStyles=' pl-1 rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/addIcon.png'
            handleClick={() => setIsOpen(true)}
          />
          </div>
        </div>
        <div>
     
    </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {imcCars?.map((car) => (
                <>
                <DashCarCard  car={car} />
           
                </>
              ))}
            </div>

            {/* <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            /> */}
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
      
          </div>
        )}
      </div>
      </div>
     
      <AddNewCar isOpen={isOpen} closeModal={() => setIsOpen(false)}  />
    </div>
  )
}

export default CarCards
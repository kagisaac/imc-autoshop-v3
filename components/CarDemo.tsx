import React from 'react'
import { CustomFilter, SearchBar } from '.'
import { HomeProps } from "@/types"
// import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction,imcCars } from '@/constants'
import CarCard from './CarCard';
import ShowMore from './ShowMore';




export default async function CarDemo(){
   
  const isDataEmpty = !Array.isArray(imcCars) || imcCars.length < 1 || !imcCars;

    
  return (
    <div className='  md:w-full sm:w-[350px]'>
    <div className='mt-12   padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>

        </div>
        

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>
        <div>
     
    </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {imcCars?.map((car) => (
                <CarCard car={car} />
              // <p>we have car</p>
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
  )
}


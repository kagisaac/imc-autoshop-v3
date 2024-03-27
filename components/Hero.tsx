"use client";
import Image from "next/image"
import { CustomButton } from "."
import { useState } from "react";
// import React from 'react'


const Hero = () => {
  const [readmore,setReadmore] =useState(false);
  const handleReadMore = () => {
        setReadmore(!readmore);
    };
    const handleScroll = () => {

    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
     <div className="hero mt-10">
      <div className="flex-1 pt-     ">
        <h1 className="hero__title  ">
         The only car dealer in the country offering INTEREST-FREE LOANS !!
        </h1>

        <p className="hero__subtitle">
         AUTOSHOP KNOWS MANY POSSIBILITIES OF FINANCING.
INCLUDING 50/50 OFFERS.

        </p>
         {readmore && (
                <div className="">
                  <h2 className="text-xl underline  font-semibold space-y-5 my-3 ">  Our  Financing Policy:</h2>

As a private individual, you can have your car financed by <i className="font-bold">Autoshop</i>. We will always make a suitable proposal that fits your personal situation. Because it concerns private financing, extras such as road tax, maintenance, and insurance are not included in this credit form. <br /> <i className=" text-lg font-bold">However</i>, you will become the owner of the car when your loan has been paid off.




<h2 className="text-xl underline  font-semibold space-y-5 my-3 ">How does it work?</h2>

You determine the desired duration in advance, which can vary between 12 and 48 months. With a long duration, the monthly payments are low, and with a short duration, they are higher, but the loan is paid off more quickly. Every month, you pay a fixed installment amount and know exactly what to expect." 

"Pay half now and the other half within the chosen monthly term."
                </div>
            )}

        <CustomButton
          title="Read More"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 duration-300"
          handleClick={handleReadMore}
        
        />
        </div>
      
      <div className="hero__image-container max-h-[620px] pt-10 ">
        <div className="hero__image " >
          <Image src="/autoshop1.png" alt="hero" fill className="object-contain shadow-sm " />
        </div>

        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  )
}

export default Hero
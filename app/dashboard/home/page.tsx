"use client";
import BarChart from '@/components/BarChart'
import RecentOrders from '@/components/RecentOrders';
import TopCardDash from '@/components/TopCardDash'
import React from 'react'

const HomeDash= () => {
  return (
  <>
  {/* <div className="relative  right-0 ">
    <TopCardDash/>
    <BarChart/>
  </div> */}
   <main className='bg-gray-100 min-h-screen z-0'>
       <div className=''>

        <TopCardDash />
       </div>
        <div className='p-4  grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
      </main>
  </>
    
  )
}

export default HomeDash
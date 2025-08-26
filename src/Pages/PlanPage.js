import React from 'react'
import Navbar from '../components/Navbar'
import BlueButton from '../components/buttons/BlueButton'
import PlanCard from '../components/PlanCard'
import Footer from '../components/Footer'

const PlanPage = () => {
    return (
        <>
            <div className='w-[100vw] min-h-screen bg-darkGrey flex items-center flex-col gap-6 pt-14'>
                <div className='w-fit px-5 py-2 font-bold text-semiLightGrey bg-white rounded-full shadow-2xl'>SELECT YOUR PLAN</div>
                <h1 className='text-4xl font-semibold text-black font-inter'>Individual</h1>
                <p className='font-normal text-base text-lightGrey'>Complimentary Smart Card included. - <span className='text-lightBlue cursor-pointer'>See all features</span></p>
                <div className='flex items-center justify-center gap-6 mt-6 flex-wrap'>
                    <PlanCard title="1 Month Free Trial" price="0" subtitle="Equal to $8.25/mo" />
                    <PlanCard title="Annual Plan" price="99" subtitle="Billed Annually" />
                    <PlanCard title="Lifetime Plan" price="12" subtitle="One-time payment" />
                </div>
            </div>
        </>

    )
}

export default PlanPage
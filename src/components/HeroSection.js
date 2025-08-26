import heroImage from '../assets/hero.svg';
import BlackButton from './buttons/BlackButton';
import BlueButton from './buttons/BlueButton';
import reviewers from '../assets/reviewers.svg'
import { FaStar } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div className='w-100 flex items-center justify-center pb-28'>
            <div className='flex flex-col'>
                <p className='text-lightBlue font-semibold text-sm leading-5 mt-16'>INSTANTLY SHARE CONTACT DETAILS WITH A SINGLE TAP</p>
                <h1 className='font-semibold text-5xl text-black font-inter mt-6 leading-[60px]'>
                    Your AI Powered<br />
                    Digital Business<br />
                    Card Platform
                </h1>
                <p className='text-lg text-lightGrey font-normal font-inter mt-10 leading-6'>
                    AI-powered digital cards that capture leads, integrate with<br /> CRMs, and amplify your brand
                </p>
                <div className='flex gap-4 mt-12'>
                    <BlueButton label='Get Yours Now' />
                    <BlackButton label='Book a Demo' />
                </div>
                <div className='flex mt-14'>
                    <div className='flex items-center justify-center py-4'>
                        <img src={reviewers} className='h-9 w-auto' />
                    </div>
                    <div className='flex flex-col items-start justify-center ml-4'>
                        <div className='flex items-center gap-2 '>
                            <FaStar className="text-lightBlue text-lg" />
                            <FaStar className="text-lightBlue text-lg" />
                            <FaStar className="text-lightBlue text-lg" />
                            <FaStar className="text-lightBlue text-lg" />
                            <FaStar className="text-lightBlue text-lg" />
                        </div>
                        <p className='text-semiGrey font-normal text-xs mt-3'><span className='font-semibold text-black'>200.000 +</span> professionals have experienced the<br />
                            future of networking</p>
                    </div>
                </div>
            </div>
            <div className='h-[70vh] w-[44vw] mt-12 flex items-center justify-center'>
                <img src={heroImage} alt='Hero' className='h-full w-full object-cover' />
            </div>
        </div>
    )
}

export default HeroSection
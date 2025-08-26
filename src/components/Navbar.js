import logo from '../assets/logo.svg';
import BlueButton from './buttons/BlueButton';
import BlueTransparentButton from './buttons/BlueTransparentButton';

const Navbar = () => {
    return (
        <nav className=' w-[100vw] h-24 bg-white flex items-center justify-center gap-14 px-4 shadow-sm'>
            <div className='flex items-center gap-4'>
                <img src={logo} className='h-7 w-54' alt='logo' />
                <hr className='border-collapse h-7 w-[1px] bg-black' />
                <p className='font-normal font-inter text-xs text-grey'>Your digital business<br />
                    card platform.</p>
            </div>
            <div className='flex items-center gap-8 font-inter'>
                <p className='font-medium text-sm text-lightGrey'>Why digital card?</p>
                <p className='font-medium text-sm text-lightGrey'>Process</p>
                <p className='font-medium text-sm text-lightGrey'>Review</p>
                <p className='font-medium text-sm text-lightGrey'>Paper Vs Digital</p>
            </div>
            <div className='flex items-center gap-4'>
                <BlueTransparentButton label='Login' />
                <BlueButton label='Get Yours Now' />

            </div>
        </nav >
    )
}

export default Navbar
import Product1 from '../assets/product1.svg';

const ProductCard = () => {
    return (
        <div className='mt-8 flex items-center gap-6'>
            <div className='w-64 bg-darkGrey rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-custom'>
                <img src={Product1} alt='card1' className='w-64 h-64 rounded-t-xl' />
                <div className='flex flex-col items-start gap-2 px-4 py-4 pb-4'>
                    <p className='text-xl font-semibold text-black'>Option 1</p>
                    <p className='text-sm font-normal text-lightGrey'>Stand out instantly, close
                        confidently.</p>
                    <p className='text-base font-medium text-black mt-10'>₹4,000 - ₹5,000</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
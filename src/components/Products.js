import ProductCard from "./ProductCard"

const Products = () => {
    return (
        <div className='w-100 flex items-center flex-col justify-center py-20'>
            <h2 className='text-4xl font-semibold font-inter leading-10'>A mini-website in your pocket</h2>
            <p className='text-base font-normal leading-5 font-inter mt-2 text-lightGrey'>The smarter, modern alternative to traditional business cards.</p>
            <div className='w-100 flex items-center justify-center gap-8 flex-wrap mt-8 px-4'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    )
}

export default Products
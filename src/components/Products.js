import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Static products (from your JSON response)
    const staticProducts = [
        {
            _id: "68b30fceb5f3747183ad503a",
            name: "Corporate Bundle",
            type: "NFC",
            description: "Best option for teams and businesses.",
            price: 15000,
            image: "product4.svg",
        },
        {
            _id: "68b30fb2b5f3747183ad5037",
            name: "Eco-Friendly Card",
            type: "NFC",
            description: "Sustainable card with a stylish finish.",
            price: 4500,
            image: "product3.svg",
        },
        {
            _id: "68b30f97b5f3747183ad5034",
            name: "Premium Metal Card",
            type: "NFC",
            description: "Durable, sleek, and modern design.",
            price: 7000,
            image: "product2.svg",
        },
        {
            _id: "68b30f70b5f3747183ad5031",
            name: "Corporate Bundle",
            type: "NFC",
            description: "Best option for teams and businesses.",
            price: 15000,
            image: "product4.svg",
        },
    ];

    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
            setProducts(staticProducts);
            setLoading(false);
        }, 500);
    }, []);

    return (
        <div className="w-100 flex items-center flex-col justify-center py-20">
            <h2 className="text-4xl font-semibold font-inter leading-10">
                A mini-website in your pocket
            </h2>
            <p className="text-base font-normal leading-5 font-inter mt-2 text-lightGrey">
                The smarter, modern alternative to traditional business cards.
            </p>

            {loading ? (
                <p className="mt-6 text-gray-500">Loading products...</p>
            ) : error ? (
                <p className="mt-6 text-red-500">{error}</p>
            ) : (
                <div className="w-100 flex items-center justify-center gap-8 flex-wrap mt-8 px-4">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;



// import ProductCard from "./ProductCard"
// import React, { useEffect, useState } from "react";
// import axiosInstance from "../api/axiosInstance";

// const Products = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchPlans = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 const res = await axiosInstance.get("/card-design", {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 setProducts(res?.data?.data);
//                 setError("");
//             } catch (err) {
//                 setError(err.response?.data?.message || "Failed to load plans");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPlans();
//     }, []);

//     return (
//         <div className='w-100 flex items-center flex-col justify-center py-20'>
//             <h2 className='text-4xl font-semibold font-inter leading-10'>A mini-website in your pocket</h2>
//             <p className='text-base font-normal leading-5 font-inter mt-2 text-lightGrey'>The smarter, modern alternative to traditional business cards.</p>
//             <div className='w-100 flex items-center justify-center gap-8 flex-wrap mt-8 px-4'>
//                 {products.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>

//         </div>
//     )
// }

// export default Products
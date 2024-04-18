
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';
import excl from "../assets/exclusive.jpg";
import exclban from "../assets/exclusivers.webp";
import { Link } from "react-router-dom";

const Exclusive = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Dwellics | Exclusive
                </title>
            </Helmet>
            <div className="px-10">
                <div className="hero lg:w-2/3 mx-auto mb-10 rounded-3xl min-h-[300px]" style={{ backgroundImage: `url(${exclban})` }}>
                    <div className=" rounded-3xl hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Exclusive</h1>
                            <p className="mb-5">Find Exclusive Residential Real Estates for You</p>

                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen bg-base-200 px-2 md:px-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={excl} className="lg:w-1/2 rounded-lg shadow-2xl" />
                        <div className="lg:w-1/2">
                            <h1 className="text-2xl font-bold">Modern Condo with City View</h1>
                            <p className="pb-6">Condo, 1500 sq ft</p>
                            <h1 className="text-red-500 text-2xl font-bold">For sale</h1>
                            <h1 className="text-red-500 text-2xl font-bold">$600,000</h1>
                            <p className="py-3">Experience urban living in this stylish condo with panoramic city views. Located in downtown San Francisco, this residence offers luxury and convenience. Enjoy the spacious balcony, sleek design, and premium amenities including a gym and swimming pool.</p>
                            <p className=" py-4 flex gap-4 items-center"><FaLocationDot />Downtown Core, San Francisco</p>
                            <div className="card-actions justify-start">
                                {/* <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div> */}
                                <div className="pb-6">
                                    <p className=" badge badge-outline">balcony</p>
                                    <p className=" badge badge-outline">gym</p>
                                    <p className=" badge badge-outline">swimming pool</p>
                                </div>

                            </div>
                            <div>
                                <Link to={'/contact'}>
                                    <button className="btn btn-primary">Contact for Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exclusive;
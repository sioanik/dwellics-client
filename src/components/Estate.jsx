import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Estate = ({ property }) => {

    // console.log(property.image);
    return (
        // <div>
        //     <div className="card bg-base-100 h-60 md:h-96 shadow-xl image-full">
        //         <figure><img src={property.image} alt="" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">{property.title}</h2>
        //             <p className="">For {property.status}!</p>
        //             <div className="card-actions justify-end">
        //                 <button className="btn btn-primary">Details</button>
        //             </div>
        //         </div>

        //     </div>
        //     <div className="pt-6">
        //         <p className="font-extrabold text-red-500">{property.price}</p>
        //         <p className="pt-4">{property.description}</p>
        //         <div className="pt-4 flex justify-between">
        //             <p>{property.area}</p>
        //             <p>{property.location}</p>
        //         </div>
        //     </div>
        // </div>

        <div>
            <div className="card max-w-96 bg-base-100 shadow-xl">
                <figure><img className="h-60 rounded-3xl" src={property.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {property.title}
                        <div className="badge bg-red-500 text-white">{property.status}!</div>
                    </h2>
                    <p className="text-red-500 text-3xl">{property.price}</p>
                    <p className="text-red-500 text-xl">For {property.status}</p>
                    <div className="flex py-4">
                        <p className="text-xl">{property.segment_name}</p>
                        <p className="text-xl flex items-center"> Area: {property.area}</p>
                    </div>
                    <p className="text-xl">{property.description}</p>
                    <p className="text-xl py-4 flex items-center"><FaLocationDot />{property.location}</p>


                    <div className="card-actions justify-end">
                        {/* <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div> */}
                        {
                            property.facilities.map((facility, idx) => (<p className=" badge badge-outline" key={idx}>{facility}</p>))
                        }

                    </div>
                    {/* <div className="pt-4 card-actions justify-center">
                        <button className="btn btn-primary">Details</button>
                    </div> */}
                    <Link to={`/property/${property.id}`} className="pt-4 card-actions justify-center">
                    <button className="btn w-full btn-primary">Details</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Estate;
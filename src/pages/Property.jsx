import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Property = () => {

    const props = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const prop = props.find(prop => prop.id === idInt)
    console.log(prop);

    // const properties = useLoaderData();
    // const {id} = useParams();
    // console.log(id, properties);

    return (
        <div>
            <Helmet>
                <title>Dwellics | Property Details</title>
            </Helmet>
            <div className="mx-14">
            <div className="hero lg:w-2/3 mx-auto mb-3 rounded-3xl min-h-[300px]" style={{ backgroundImage: `url(${prop.image})` }}>
                    <div className=" rounded-3xl hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{prop.title}</h1>
                 

                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-10 hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row items-start">
                    {/* <img src={prop.image} className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div className="mx-10">
                        {/* <h1 className="text-2xl font-bold">{prop.title}</h1> */}
                        <h1 className="text-red-500 text-2xl font-bold">For {prop.status}</h1>
                        <h1 className="text-red-500 text-2xl font-bold">{prop.price}</h1>
                        <p className="pt-3">{prop.segment_name}, {prop.area}</p>
                        <p className="py-3">{prop.description}</p>
                        <p className=" py-4 flex items-center"><FaLocationDot />{prop.location}</p>
                        <div className="card-actions justify-start">
                        {/* <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div> */}
                        {
                            prop.facilities.map((facility, idx) => (<p className=" badge badge-outline" key={idx}>{facility}</p>))
                        }

                    </div>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;
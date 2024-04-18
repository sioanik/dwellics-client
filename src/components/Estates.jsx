import { useEffect, useState } from "react";
import Estate from "./Estate";



const Estates = () => {

   const [properties, setProperties] = useState([])

    useEffect(()=>{
        fetch('estates.json')
        .then(res => res.json())
        .then(data => setProperties(data))
    },[])

    // console.log(estates[0].id);


    return (
        <div className="my-10">
            <div className="text-center px-20">
                <p className="text-xl font-bold pb-6">Discover Your Dream Home</p>
                <p>Explore a diverse selection of residential properties for sale and rent. Find the perfect space to suit your lifestyle and budget. Start your journey today!</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 m-20">
            {
                properties.map(property => <Estate key={property.id} property={property}></Estate>)
            }
            </div>
        </div>
    );
};

export default Estates;
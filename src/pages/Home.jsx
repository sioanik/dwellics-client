import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Estates from "../components/Estates";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Home = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Dwellics | Home</title>
            </Helmet>
           <Banner></Banner>
           <Estates></Estates>
        </div>
    );
};

export default Home;
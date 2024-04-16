import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Estates from "../components/Estates";

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
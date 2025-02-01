import BestSeller from "../components/BestSeller";
import NewArrivals from "../components/NewArrivals";
import ImageSlider from "../components/Slider";

const Home = () => {
    return (
        <div>
            
            <ImageSlider/>
            <NewArrivals/>
            <BestSeller/>
            
        </div>
    );
};

export default Home;
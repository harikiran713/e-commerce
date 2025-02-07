import BestSeller from "../components/BestSeller";
import NewArrivals from "../components/NewArrivals";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";
import ImageSlider from "../components/Slider";

const Home = () => {
    return (
        <div>
            
            <ImageSlider/>
            <NewArrivals/>
            <BestSeller/>
            <OurPolicy/>
            <NewsletterBox/>
            
        </div>
    );
};

export default Home;
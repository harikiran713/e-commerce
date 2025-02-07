import { assets } from "../assets/frontend_assets/assets";


const OurPolicy = () => {
    return (
    
        <div className="flex flex-col sm:flex-row  justify-around gap-12 sm:gap-2 py-20 ">
            <div className="flex flex-col items-center justify-center">
 <img src={assets.exchange_icon} alt="" />
 
 <p className="font-semibold">Easy Exchange Policy</p>
 <p className="text-gray-500"> we offer hassle free exchange Policy</p>
            </div>
            <div className="flex flex-col items-center justify-center">
 <img src={assets.quality_icon} alt="" />
 
 <p className="font-semibold">7 Days Return Policy</p>
 <p className="text-gray-500"> We provide 7 days free return policy</p>
            </div>
            <div className="flex flex-col items-center justify-center">
 <img src={assets.support_img} alt="" />
 
 <p className="font-semibold">Best customer support</p>
 <p className="text-gray-500"> we provide 24/7 customer support</p>
            </div>
        </div>
    );
};

export default OurPolicy;
// small differnce in justify-around and justify-between and justify-center //////justify-center start from the center and justify-between give equal spaces between and starts from start wont give white spaces is 
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import {Link} from "react-router-dom"

const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext);
    return (
        <div className="border-[4px] rounded-lg hover:scale-110 transition ease-in-out">
            {/* transistion a timing function that controls the how a transition progress over a time ease-in-out mean start slow speeds up  in middle then ends slow  */}
            <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
            <div>
                <img src={image[0]} alt="" className="  " />
            </div>
            <div className="flex flex-col items-center">
            <p className="text-sm">{name}</p>
            <p>{currency}{price}</p>
            </div>
           
            

            </Link>
        </div>
    );
};

export default ProductItem;
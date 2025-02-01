import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";


const NewArrivals = () => {
    const {products}=useContext(ShopContext);
    const [newProducts,setnewProducts]=useState([])
    useEffect(()=>
    {
        setnewProducts(products.slice(10,20));
    },[])
   
    return (
        <div>
            <div className=" flex flex-col  items-center text-3xl mt-8 gap-3">
            <Title  text1="New" text2="Arrivals"/>
            
            
            </div>
            {/* rendering new products
            */}
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6 ">
  {
    newProducts.map((item, index) => (  // Fixed: added curly braces around (item, index)
      <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
    ))
  }
</div>

           
        </div>
    );
};

export default NewArrivals;
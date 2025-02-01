import { useEffect, useContext, useState } from "react";

import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);
  const {products} = useContext(ShopContext);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []); 

  return (
    <div>
      <div className="flex justify-center mt-12  text-3xl">
        <Title text1={'BEST'} text2={"SELLERS"} size="" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-7 gap-6 ">
        {
            bestSeller.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
      </div>
    </div>
  );
};

export default BestSeller;

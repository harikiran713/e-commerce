import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee =10;
    const value = {
        products,currency,delivery_fee
    };

    return (
        <ShopContext.Provider value={value}>
            {/* Value is passed in curly braces because JSX needs {} to recognize that value is a JavaScript variable rather than plain text */}
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

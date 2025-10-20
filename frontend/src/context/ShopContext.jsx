import React, { createContext, useState } from 'react';
import { products } from "../assets/assets";



export const ShopContext=createContext();

const ShopContextProvider = (props) =>{
const    currency='$'
const delivery_fee=10
const [search,setsearch]=useState(false)


const value={products,delivery_fee,currency,search,setsearch}

return (


    <ShopContext.Provider value={value}>
                {props.children}
            </ShopContext.Provider>
)
}

export default ShopContextProvider;
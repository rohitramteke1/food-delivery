"use client"

import { useState } from "react";
import { createContext } from "react";

export const context = createContext();


export default function ContextProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
    return(
        <context.Provider value={{cartItems, setCartItems}}>
            {children}
        </context.Provider>
    );
}
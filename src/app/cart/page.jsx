"use client";

import React, { useContext } from "react";
import { context } from "../../context/contextProvider";

export default function Cart() {
    const { cartItems, addItem, removeItem } = useContext(context);

    // Group items by their title and calculate the count
    const itemCounts = cartItems.reduce((acc, item) => {
        acc[item.title] = (acc[item.title] || 0) + 1;
        return acc;
    }, {});

    // Convert the itemCounts object to an array of unique items with count
    const uniqueItems = Object.keys(itemCounts).map((title) => {
        const item = cartItems.find((item) => item.title === title);
        return {
            title,
            count: itemCounts[title],
            price: item.price,
            image: item.image,
        };
    });

    // Calculate the total price
    const totalPrice = uniqueItems.reduce(
        (acc, item) => acc + item.price * item.count,
        0
    );

    // AddItem - Dynamic

    return (
        <div className="flex justify-between p-5">
            {/* Left Section with Cart Items as Cards */}
            <div className="w-[45%] p-5">
                <h4 className="text-xl font-bold">Cart Items</h4>
                <div className="flex flex-col gap-5">
                    {uniqueItems.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 p-4 rounded-lg shadow-md flex items-center justify-between"
                        >
                            {/* Image Section */}
                            <div className="flex justify-center items-center w-[40%] h-36 overflow-hidden shadow-md bg-gray-100 rounded-lg">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="flex-1 ml-3">
                                <h5 className="m-0 text-center text-lg">{item.title}</h5>
                                {/* Buttons Section */}
                                <div className="flex justify-center items-center gap-3 mt-3">
                                    <button
                                        onClick={() => addItem(item)}
                                        className="px-3 py-1 bg-green-500 text-white rounded-md cursor-pointer"
                                    >
                                        +
                                    </button>
                                    <span>{item.count}</span>
                                    <button
                                        onClick={() => removeItem(item)}
                                        className="px-3 py-1 bg-red-500 text-white rounded-md cursor-pointer"
                                    >
                                        -
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vertical Separator Line */}
            <div className="w-[2px] bg-gray-300 mx-5 h-full" />

            {/* Right Section with Cart Summary */}
            <div className="w-[45%] p-5">
                <h4 className="text-xl font-bold">Cart Summary</h4>
                {uniqueItems.length > 0 ? (
                    <table className="border-collapse w-full text-left">
                        <thead>
                            <tr>
                                <th className="px-3 py-2 w-[10%]">#</th>
                                <th className="px-3 py-2 w-[40%]">Item Name</th>
                                <th className="px-3 py-2 w-[20%]">Price</th>
                                <th className="px-3 py-2 w-[20%]">Quantity</th>
                                <th className="px-3 py-2 w-[20%]">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {uniqueItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-3 py-2">{index + 1}</td>
                                    <td className="px-3 py-2">{item.title}</td>
                                    <td className="px-3 py-2">${item.price.toFixed(2)}</td>
                                    <td className="px-3 py-2">{item.count}</td>
                                    <td className="px-3 py-2">
                                        ${(item.price * item.count).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No items in the cart</p>
                )}

                {uniqueItems.length > 0 && (
                    <div className="pt-2 font-bold">
                        <p className="text-right mt-2">
                            Total Price: ${totalPrice.toFixed(2)}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

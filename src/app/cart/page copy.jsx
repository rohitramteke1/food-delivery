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
            image: item.image,
        };
    });

    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
            {/* Left Section with Cart Items as Cards */}
            <div style={{ width: "45%", padding: "20px" }}>
                <h4>Cart Items</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {uniqueItems.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                border: "1px solid #ddd",
                                padding: "10px",
                                borderRadius: "8px",
                                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            {/* Image Section */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "40%",
                                    height: "150px", // Fixed container height
                                    overflow: "hidden", // Ensures no unwanted overflow
                                    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
                                    backgroundColor: "whitesmoke", // Adds a nice background
                                    borderRadius: "8px",
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        objectFit: "contain", // Keeps the entire image visible
                                    }}
                                />
                            </div>

                            {/* Details Section */}
                            <div style={{ flex: 1, marginLeft: "10px" }}>
                                <h5 style={{ margin: 0, textAlign: "center" }}>{item.title}</h5>
                                {/* Buttons Section */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "10px",
                                        marginTop: "10px",
                                    }}
                                >
                                    <button
                                        onClick={() => addItem(item)}
                                        style={{ padding: "5px 10px", cursor: "pointer" }}
                                    >
                                        +
                                    </button>
                                    <span>{item.count}</span>
                                    <button
                                        onClick={() => removeItem(item)}
                                        style={{ padding: "5px 10px", cursor: "pointer" }}
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
            <div
                style={{
                    width: "2px",
                    backgroundColor: "#ddd",
                    margin: "0 20px",
                    height: "auto",
                    maxHeight: "100%",
                }}
            />

            {/* Right Section with Cart Summary */}
            <div style={{ width: "45%", padding: "20px" }}>
                <h4>Cart Summary</h4>
                {uniqueItems.length > 0 ? (
                    <table
                        border="1"
                        style={{
                            borderCollapse: "collapse",
                            width: "100%",
                            textAlign: "left",
                        }}
                    >
                        <thead>
                            <tr>
                                <th style={{ padding: "8px", width: "10%" }}>#</th>
                                <th style={{ padding: "8px", width: "50%" }}>Item Name</th>
                                <th style={{ padding: "8px", width: "20%" }}>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {uniqueItems.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ padding: "8px" }}>{index + 1}</td>
                                    <td style={{ padding: "8px" }}>{item.title}</td>
                                    <td style={{ padding: "8px" }}>{item.count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No items in the cart</p>
                )}
            </div>
        </div>
    );
}

import React from "react";
import Item from "./Item";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Pencils", quantity: 1, packed: false },
    { id: 3, description: "shoes", quantity: 8, packed: true },
];

const ParkingList = () => {
    return (<div className="list">
        <ul>
            {initialItems.map((item) => (
                <Item itemObj={item} />
            ))}
        </ul>
    </div>)
};

export default ParkingList;

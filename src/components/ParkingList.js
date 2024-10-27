import React from "react";
import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Pencils", quantity: 1, packed: false },
  { id: 4, description: "shoes", quantity: 8, packed: true },
];

const ParkingList = ({items, onDeleteItem, onToggle}) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} itemObj={item} onDeleteItem={onDeleteItem} onToggle={onToggle} />
        ))}
      </ul>
    </div>
  );
};

export default ParkingList;

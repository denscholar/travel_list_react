import React, { useState } from "react";
import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Pencils", quantity: 1, packed: false },
  { id: 4, description: "shoes", quantity: 8, packed: true },
];

const ParkingList = ({ items, onDeleteItem, onToggle }) => {
  const [sortBy, setSortBy] = useState('input')

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} itemObj={item} onDeleteItem={onDeleteItem} onToggle={onToggle} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="parked">Sort by parked</option>
        </select>
      </div>

    </div>
  );
};

export default ParkingList;

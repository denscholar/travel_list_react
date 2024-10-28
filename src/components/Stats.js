import React, { useState } from "react";

const Stats = ({ items }) => {
  const itemLength = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / itemLength) * 100);
 

  return (
    <footer className="stats">
      {percentage ? (
        "You got everything! ready to go"
      ) : (
        <em>
          You have {itemLength} items on your list and you already packed{" "}
          {packed} {percentage}%
        </em>
      )}
    </footer>
  );
};

export default Stats;

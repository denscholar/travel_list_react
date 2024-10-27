import React from "react";

const Item = (props) => {
  const { description, quantity, packed, id } = props.itemObj;
  const onDeleteItem = props.onDeleteItem;
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {description} {quantity}
        <button style={{ color: "red" }} onClick={() => onDeleteItem(id)}>
          X
        </button>
      </span>
    </li>
  );
};

export default Item;

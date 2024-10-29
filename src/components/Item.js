import React from "react";
import Button from "./Button";

const Item = (props) => {
  const { description, quantity, packed, id } = props.itemObj;
  const onDeleteItem = props.onDeleteItem;
  const onToggle = props.onToggle;
  return (
    <li>
      <input type="checkbox" value={id} onChange={() => onToggle(id)} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {description} {quantity}
        <Button color="red" text="X" onClick={() => onDeleteItem(id)} />
      </span>
    </li>
  );
};

export default Item;

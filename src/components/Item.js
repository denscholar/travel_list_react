import React from "react";

const Item = (props) => {
    const { description, quantity, packed } = props.itemObj;
    return (
        <li>
            <span style={packed ? {textDecoration: 'line-through'} : {}}>
                {description} {quantity}
                <button style={{ color: "red" }}>X</button>
            </span>
        </li>
    )

};

export default Item;
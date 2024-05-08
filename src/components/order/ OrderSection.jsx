import React, { useState } from "react";
import "./order.scss";

const OrderSection = () => {
  const [focusedItem, setFocusedItem] = useState(null);

  const handleItemClick = (index) => {
    if (focusedItem === index) {
      setFocusedItem(index);
    } else {
      setFocusedItem(index);
    }
  };
  return (
    <div className="order">
      <div className="order__title">
        <h1>Orders #34562</h1>
        <ul>
          <li className={`order__li ${
              focusedItem === 1 ? "active" : ""
            }`}
            onClick={() => handleItemClick(1)}>Dine In</li>
          <li className={`order__li ${
              focusedItem === 2 ? "active" : ""
            }`}
            onClick={() => handleItemClick(2)}>To Go</li> 
          <li className={`order__li ${
              focusedItem === 3 ? "active" : ""
            }`}
            onClick={() => handleItemClick(3)}>Delivery</li>
        </ul>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default OrderSection;

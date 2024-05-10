import React, { useState } from "react";
import "./order.scss";
import { LuTrash } from "react-icons/lu";

const OrderSection = ({ selectedCards, onRemoveCard , setPage}) => {
  const [focusedItem, setFocusedItem] = useState(1);
  

  const handleItemClick = (index) => {
    if (focusedItem === index) {
      setFocusedItem(index);
    } else {
      setFocusedItem(index);
    }
  };

  const handleRemoveCard = (index) => {
    onRemoveCard(index);
  };

  const calculateOverallSum = () => {
    return selectedCards.reduce((acc, card) => {
      return acc + card.sum * card.quantity;
    }, 0);
  };

  return (
      <div className="order">
        <div className="order__title">
          <h1>Orders #34562</h1>
          <ul>
            <li
              className={`order__li ${focusedItem === 1 ? "active" : ""}`}
              onClick={() => handleItemClick(1)}
            >
              Dine In
            </li>
            <li
              className={`order__li ${focusedItem === 2 ? "active" : ""}`}
              onClick={() => handleItemClick(2)}
            >
              To Go
            </li>
            <li
              className={`order__li ${focusedItem === 3 ? "active" : ""}`}
              onClick={() => handleItemClick(3)}
            >
              Delivery
            </li>
          </ul>
        </div>
        <div className="order__shce">
          <p>Item</p>
          <div>
            <p>Qty</p>
            <p>Price</p>
          </div>
        </div>
        <div className="order__taken">
          {selectedCards.map((card, index) => (
            <div key={index} className="order__choose">
              <div className="order__choose--top">
                <div className="order__choose--top__left">
                  <img src={card.img} alt="" />
                  <div>
                    <h3>{card.title}</h3>
                    <p>${card.sum}</p>
                  </div>
                </div>
                <div className="order__choose--top__right">
                  <div className="order__choose--top__right--qnt">
                    {card.quantity}
                  </div>
                  <div className="order__choose--top__right--overall">
                    ${card.sum * card.quantity}
                  </div>
                </div>
              </div>
              <div className="order__choose--bottom">
                <div className="order__choose--bottom__left">
                  <input type="text" placeholder="Order Note..." />
                </div>
                <div
                  className="order__choose--bottom__right"
                  onClick={() => handleRemoveCard(index)}
                >
                  <LuTrash className="trashCan" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="order__submit">
          <div className="order__submit--price">
            <div className="order__submit--price__overall">
              <p>Discount</p>
              <h6>$0</h6>
            </div>
            <div className="order__submit--price__overall">
              <p>Sub total</p>
              <h6>${calculateOverallSum()}</h6>
            </div>
          </div>
          <button onClick={()=>setPage(true)}>Continue to Payment</button>
        </div>
      </div>
  );
};

export default OrderSection;

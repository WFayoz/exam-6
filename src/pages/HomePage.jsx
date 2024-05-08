import React, { useEffect, useState } from "react";
import "./home.scss";
import { IoSearch } from "react-icons/io5";
import axios from "axios";

const HomePage = () => {
  const [focusedItem, setFocusedItem] = useState(null);

  const handleItemClick = (index) => {
    if (focusedItem === index) {
      setFocusedItem(index);
    } else {
      setFocusedItem(index);
    }
  };
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "https://662c975d0547cdcde9dea45a.mockapi.io/test"
      );
      if (res.status !== 200) throw new Error("Something went wrong!");
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(data);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home mx-auto">
      <div className="header">
        <div className="header__title">
          <div className="header__title--name">
            <h2>Jaegar Resto</h2>
            <p>Tuesday, 2 Feb 2021</p>
          </div>
          <form action="">
            <IoSearch className="search__menu" />
            <input type="search" placeholder="Search for food, coffe, etc.." />
          </form>
        </div>
        <ul className="header__menu">
          <li
            className={`header__menu--item ${
              focusedItem === 1 ? "active" : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            Hot dishes
          </li>
          <li
            className={`header__menu--item ${
              focusedItem === 2 ? "active" : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            Cold Dishes
          </li>
          <li
            className={`header__menu--item ${
              focusedItem === 3 ? "active" : ""
            }`}
            onClick={() => handleItemClick(3)}
          >
            Soup
          </li>
          <li
            className={`header__menu--item ${
              focusedItem === 4 ? "active" : ""
            }`}
            onClick={() => handleItemClick(4)}
          >
            Grill
          </li>
          <li
            className={`header__menu--item ${
              focusedItem === 5 ? "active" : ""
            }`}
            onClick={() => handleItemClick(5)}
          >
            Appetizer
          </li>
          <li
            className={`header__menu--item ${
              focusedItem === 6 ? "active" : ""
            }`}
            onClick={() => handleItemClick(6)}
          >
            Dessert
          </li>
        </ul>
      </div>
      <div className="menu">
        <div className="menu__title">
          <h2>Choose Dishes</h2>
          <div>salom</div>
        </div>
        <div className="menu__dishes">
          <div className="cards ">
            {data.map((product) => (
              <div key={product.id} className="card">
                <img src={product.img} alt="" />
                <div className="cards__text">
                <h3>{product.title}</h3>
                <h5>$ {product.sum}</h5>
                <p>{product.qnt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

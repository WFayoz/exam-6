import React, { useEffect, useState } from "react";
import "./home.scss";
import { IoSearch } from "react-icons/io5";
import axios from "axios";

const HomePage = () => {
  const [focusedItem, setFocusedItem] = useState(null);
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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

  useEffect(() => {
    getProducts();
  }, []);

  const handleItemClick = (index) => {
    if (focusedItem === index) {
      setFocusedItem(null);
    } else {
      setFocusedItem(index);
    }
  };

  const handleCardClick = (productId) => {
    const updatedProducts = data.map((product) => {
      if (product.id === productId && product.qnt > 0) {
        return {
          ...product,
          qnt: product.qnt - 1,
        };
      }
      return product;
    });
    setData(updatedProducts);
  };

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="home">
      <div className="header">
        <div className="header__title">
          <div className="header__title--name">
            <h2>Jaegar Resto</h2>
            <p>Tuesday, 2 Feb 2021</p>
          </div>
          <div className="flex gap-5 items-center justify-center">
            <form onSubmit={(e) => e.preventDefault()}>
              <IoSearch className="search__menu" />
              <input
                type="search"
                placeholder="Search for food, coffee, etc.."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </form>
          </div>
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
          {filteredData.map((product) => (
            <div
              key={product.id}
              className="card"
              onClick={() => handleCardClick(product.id)}
            >
              <img src={product.img} alt="" />
              <div className="cards__text">
                <h3>{product.title}</h3>
                <h5>$ {product.sum}</h5>
                <p>{product.qnt} Bowls available</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

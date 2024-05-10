import React, { useState } from "react";
import OrderSection from "./components/order/ OrderSection.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import HomePage from "./pages/HomePage.jsx";
import { FaRegCreditCard } from "react-icons/fa6";
import { SlPaypal } from "react-icons/sl";
import { LuWallet } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import './App.css'

const App = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedOption, setSelectedOption] = useState("dine-in");
  const [page, setPage] = useState(false);
  const [active, setActive] = useState(null);

  const handleCardClick = (card) => {
    const existingCardIndex = selectedCards.findIndex(
      (selectedCard) => selectedCard.id === card.id
    );
    if (existingCardIndex !== -1) {
      const newSelectedCards = [...selectedCards];
      newSelectedCards[existingCardIndex].quantity += 1;
      setSelectedCards(newSelectedCards);
    } else {
      setSelectedCards([...selectedCards, { ...card, quantity: 1 }]);
    }
  };

  const handleRemoveCard = (index) => {
    const newSelectedCards = [...selectedCards];
    newSelectedCards.splice(index, 1);
    setSelectedCards(newSelectedCards);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="w-[full] bg-[#252836] flex">
        <Sidebar />
        <HomePage
          onCardClick={handleCardClick}
          onSelectOption={handleSelectOption}
        />
        <OrderSection
          setPage={setPage}
          selectedCards={selectedCards}
          onRemoveCard={handleRemoveCard}
          selectedOption={selectedOption}
        />
      </div>
      {page ? (
        <div id="payContainer">
          <div className="payment">
            <div className="payment__wrapper">
              <div className="paymentTitle">
                <h1 className="paymentTitlePay">
                  Payment
                </h1>
                <p className="payMet">
                  3 payment method available
                </p>
              </div>
              <div>
                <h1 className="text-white text-[24px] font-semibold">
                  Payment Method
                </h1>
                <div className="flex pt-6 gap-4 cursor-pointer">
                  <div
                    className={
                      active == 1
                        ? "  h-16 rounded-lg min-w-28 border-white border-4 "
                        : "border  px-3 py-2  h-16 rounded-lg min-w-28  "
                    }
                    onClick={() => setActive(1)}
                  >
                    <div className="flex mb-2">
                      <FaRegCreditCard
                        className={
                          active == 1
                            ? "w-6 h-6 text-white block mx-auto"
                            : "w-6 h-6  text-[#ABBBC2] block mx-auto"
                        }
                      />
                      {active == 1 ? (
                        <FaCheckCircle className="text-[#EA7C69]" />
                      ) : (
                        <></>
                      )}
                    </div>
                    <h1
                      className={active == 1 ? "text-white" : "text-[#ABBBC2]"}
                    >
                      Credit Card
                    </h1>
                  </div>
                  <div
                    className={
                      active == 2
                        ? "  rounded-lg h-16 min-w-28 border-white border-4 cursor-pointer "
                        : "border px-3 py-2 h-16 rounded-lg min-w-28   cursor-pointer"
                    }
                    onClick={() => setActive(2)}
                  >
                    <div className="flex mb-2">
                      <SlPaypal
                        className={
                          active == 2
                            ? "w-6 h-6 text-white block mx-auto"
                            : "w-6 h-6  text-[#ABBBC2] block mx-auto"
                        }
                      />
                      {active == 2 ? (
                        <FaCheckCircle className="text-[#EA7C69]" />
                      ) : (
                        <></>
                      )}
                    </div>
                    <h1
                      className={active == 2 ? "text-white" : "text-[#ABBBC2]"}
                    >
                      Credit Card
                    </h1>
                  </div>
                  <div
                    className={
                      active == 3
                        ? "  h-16 rounded-lg min-w-28 border-white border-4 cursor-pointer "
                        : "border px-3 py-2  h-16 rounded-lg min-w-28   cursor-pointer"
                    }
                    onClick={() => setActive(3)}
                  >
                    <div className="flex mb-2">
                      <LuWallet
                        className={
                          active == 3
                            ? "w-6 h-6 text-white block mx-auto"
                            : "w-6 h-6  text-[#ABBBC2] block mx-auto"
                        }
                      />
                      {active == 3 ? (
                        <FaCheckCircle className="text-[#EA7C69]" />
                      ) : (
                        <></>
                      )}
                    </div>
                    <h1
                      className={active == 3 ? "text-white" : "text-[#ABBBC2]"}
                    >
                      Credit Card
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <form className=" w-full pt-6">
                  <label className="text-white font-medium mt-5">
                    Cardholder Name
                  </label>
                  <div className="w-full mt-2  mb-3">
                    <input
                      type="text "
                      placeholder="Levi Ackerman"
                      className=" w-full  py-3 pl-3 bg-[#393C49] rounded-lg"
                    />
                  </div>

                  <label className="text-white font-medium ">Card Number</label>
                  <div>
                    <input
                      className="w-full py-3 pl-3 bg-[#393C49] rounded-lg"
                      type="text "
                      placeholder="2564 1421 0897 1244"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-white font-medium mt-5 mb-2">
                        Expiration Date
                      </p>
                      <input
                        type="data"
                        placeholder="02/2022"
                        className="w-[180px] py-3 pl-3 bg-[#393C49] rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium mt-5 mb-2">CVV</p>
                      <input
                        type="text "
                        placeholder="...."
                        className="w-[180px] py-3 pl-3 bg-[#393C49] rounded-lg mb-3"
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <div>
                      <p className="text-white font-medium mt-5 mb-2">
                        Order Type
                      </p>
                      <input
                        type="text "
                        placeholder="Dine In"
                        className="w-[180px] py-3 pl-3 bg-[#393C49] rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium mt-5 mb-2">
                        Table no.
                      </p>
                      <input
                        type="text "
                        placeholder="140"
                        className="w-[180px] py-3 pl-3 bg-[#393C49] rounded-lg mb-3"
                      />
                    </div>
                  </div>
                </form>
                <div className="flex justify-between mt-5">
                  <button
                    className="w-[180px] py-3 border text-[#EA7C69] rounded-lg border-[#EA7C69]"
                    onClick={() => setPage(false)}
                  >
                    Cancel
                  </button>
                  <button className="w-[180px] py-3 border border-[#EA7C69] text-[white] rounded-lg bg-[#EA7C69]">
                    Confirm Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;

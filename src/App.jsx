// App.jsx
import React, { useState } from "react";
import OrderSection from "./components/order/ OrderSection.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedOption, setSelectedOption] = useState("dine-in");

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
    <div className="w-[full] bg-[#252836] flex">
      <Sidebar />
      <HomePage
        onCardClick={handleCardClick}
        onSelectOption={handleSelectOption}
      />
      <OrderSection
        selectedCards={selectedCards}
        onRemoveCard={handleRemoveCard}
        selectedOption={selectedOption}
      />
    </div>
  );
};

export default App;

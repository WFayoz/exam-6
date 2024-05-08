import React from "react";
import OrderSection from "./components/order/ OrderSection";
import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="w-full bg-[#252836]  mx-auto flex">
      <Sidebar />
      <HomePage />
      <div className="w-[360px]">

      <OrderSection />
      </div>
    </div>
  );
};

export default App;

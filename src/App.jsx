import React, { } from "react";
import OrderSection from "./components/order/ OrderSection";
import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="w-full bg-[#252836] flex">
      <Sidebar />
      <HomePage />
      <OrderSection />
    </div>
  );
};

export default App;

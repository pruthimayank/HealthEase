import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Finance from "./components/Finance";
import OnlineAppointment from "./components/OnlineAppointment";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/appointment" element={<OnlineAppointment />} />
      </Routes>
    </div>
  );
}

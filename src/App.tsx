import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <div className="container">
      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;

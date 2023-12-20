import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <nav className="my-8 mx-8 lg:px-8 flex items-center justify-between z-1">
        <Link
          to={"/"}
          className="text-2xl md:text-3xl font-kollektifbold text-green-500"
        >
          whatnot
        </Link>

        <Link to={"/privacy"} className="text-xs cursor-pointer md:text-base">
          Privacy Policy
        </Link>
      </nav>
      <div className="container">
        {/* Defining routes path and rendering components as element */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Personaje from "./pages/Personaje";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personaje/:id" element={<Personaje />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

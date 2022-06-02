import "./App.css";
import { Routes, Route } from "react-router-dom"; //ADD
import Navbar from "./components/Navbar";
import CharactersList from "./Pages/CharactersList";
import OneCharacter from "./Pages/OneCharacter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<OneCharacter />} />
      </Routes>
    </div>
  );
}

export default App;

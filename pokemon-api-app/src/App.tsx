import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PokemonAppProvider } from "./components/context/PokemonAppContext";
import Home from "./components/pages/Home";

function App() {
  return (
    <PokemonAppProvider>
      <Router>
        <div>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
    </PokemonAppProvider>
  );
}

export default App;

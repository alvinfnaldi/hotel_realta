import "./App.css";

import { Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Loc from "./components/Loc";
import Pol from "./components/Pol";
import Cat from "./components/Cat";
import Pri from "./components/Pri";
import Ser from "./components/Ser";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Main />} />
        
        <Route path="/master">
          <Route path="locations" element={<Loc />} />
          <Route path="policy" element={<Pol />} />
          <Route path="category" element={<Cat />} />
          <Route path="priceitems" element={<Pri />} />
          <Route path="servicetasks" element={<Ser />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;

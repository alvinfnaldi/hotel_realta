import "./App.css";
import Breadcrumb from "./components/Breadcrumb";
import Locations from "./components/Locations";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Policy from "./components/Policy";
import CategoryGroup from "./components/CategoryGroup";
import PriceItems from "./components/PriceItems";
import ServiceTasks from "./components/ServiceTasks";
import Masters from "./components/Masters";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Main />} />
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/master" element={<Masters />}>
          <Route path="locations" element={<Locations />} />
          <Route index path="locations/add" element={<Modal />} />
          <Route path="policy" element={<Policy />} />
          <Route path="category" element={<CategoryGroup />} />
          <Route path="priceitems" element={<PriceItems />} />
          <Route path="servicetasks" element={<ServiceTasks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

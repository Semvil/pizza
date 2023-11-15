import "./scss/app.scss";
import Header from "./components/Headerr";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { useState } from "react";

// console.log(data);
function App() {
  const [searchValue, setSearchValue] = useState("");
  // console.log(searchValue);
  return (
    <div class="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div class="content">
        <Routes>
          <Route
            path="/"
            element={
              <Home searchValue={searchValue} setSearchValue={setSearchValue} />
            }
          ></Route>
          <Route path="/cart.html" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

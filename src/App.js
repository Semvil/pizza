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

// console.log(data);
function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart.html" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

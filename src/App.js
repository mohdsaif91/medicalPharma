import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/contact";
import Product from "./Pages/Product/product";
import ProductByCategory from "./Pages/ProductByCategory/ProductByCategory";
import SingleProductView from "./Pages/SingleProductView/SingleProductView";

import style from "./app.module.scss";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className={style.appContainer}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/productByCategory/:categoryName"
          element={<ProductByCategory />}
        />
        <Route path="productView/:productId" element={<SingleProductView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

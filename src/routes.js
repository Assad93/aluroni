import Footer from "components/Footer";
import Header from "components/Header";
import Menu from "components/Menu";
import About from "pages/About";
import Carte from "pages/Carte/Carte";
import Dish from "pages/Dish";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default () => {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Carte />} />
            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="prato/:id" element={<Dish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

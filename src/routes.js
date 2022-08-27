import Header from "components/Header";
import Menu from "components/Menu";
import Carte from "pages/Carte/Carte";
import Home from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default () => {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Carte />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
};

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Wishlist from "./pages/Wishlist";
import Stores from "./pages/Stores";
import FlightCompare from "./pages/FlightCompare";
import BusCompare from "./pages/BusCompare";
import NotFound from "./pages/NotFound";
import { WishlistProvider } from "./context/WishlistContext";

function App() {
  return (
    <WishlistProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/flight-compare" element={<FlightCompare />} />
        <Route path="/bus-compare" element={<BusCompare />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </WishlistProvider>
  );
}

export default App;
